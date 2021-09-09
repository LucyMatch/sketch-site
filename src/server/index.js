const express = require('express');
const path = require('path')
const Promise = require('bluebird')
const http = require('http')
const promiseRetry = require('promise-retry')

//const Structure = require('./dataStructure.js')   //not using yet
const utilities = require('./utilities.js')

require('dotenv').config() //get main config settings from .env

const app = express();

//Proxy stuff here going through /api/ - may want to rethink?
app.use(express.static('dist'));
app.use('/api/libs', express.static(process.cwd() + '/node_modules'));

app.use(express.urlencoded());
app.use(express.json());

/*  ROUTES  */

/*
    ROUTE : GET SKETCH DATA
    -------------------------------
    Returns a list of all enabled sketches - based on 
    .env mode local / production
    set sketch status in server/settings/sketch_list.json

    @TODO: set data strucring for this - we want norm + ids
            curr just going into app as array....
            additionally will want to set filtering for "active" sketches
*/
app.get('/api/sketch-list', (req, res, next) => {
    promiseRetry(utilities.promiseSettings, (retry, number) => {
        if(number > 1)console.debug('get sketches', number)

        return utilities.getLocalFile( process.env.SKETCH_LIST_LOCAL, 'sketch list file' )
            .catch((err) => retry(err))
    })
    .then(data => res.json(data))
    .catch(err => next(err))
})

//  redirect
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../dist/index.html'), function (err) {
		if (err) res.status(500).send(err)
	})
})


/*  ERROR HANDLING  */

function logErrors(err, req, res, next) {
    if(err.stack){
        console.error(err.stack)
        logger.error(err.stack)
    }else{
        console.error(err)
        logger.error(err)
    }
	next(err)
}

function errorhandler(err, req, res, next){

	if (res.headersSent) {
		return next(err)
    }
    if(err.status){
        res.status(err.status).send({
            status: err.status,
            msg : err.statusText,
            err : err
        })
    }else{
        res.status(500).send({
            status: 500,
            msg: "Error Occured",
            err: err,
        })
    }
}

//attach middleware
app.use(logErrors)
app.use(errorhandler)

/*  START SERVER  */

app.listen(process.env.PORT || 8080, () => console.log(`Listening on Port : ${process.env.PORT || 8080}!`));
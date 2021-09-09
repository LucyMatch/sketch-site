const Promise = require('bluebird')
const fs = require('fs')

//for loading local json files
function getLocalFile( path, description ){
    return new Promise( ( resolve, reject) => {
        let raw
		try {
			raw = fs.readFileSync(__dirname + path)
		} catch (err) {
			reject({
				msg: 'Failed to access local file : ' + description,
				error: err,
			})
		}
        let data = JSON.parse(raw)
        config = data;
		resolve(data)
    })
}

//for writing local json files
function writeLocalFile( path, description, data ){
    return new Promise( ( resolve, reject) => {
		try {
            const data_write = fs.writeFileSync(__dirname + path, JSON.stringify(data))
            resolve(data_write)
		} catch (err) {
			reject({
				msg: 'Failed to write local file : ' + description,
				error: err,
			})
		}
    })
}

//check status middleware for any node-fetch error handling
function checkStatus(res) {
	if (res.ok) {
		return res
	} else {
		throw res
	}
}

/*
    Promise retry default settings
*/


let promiseSettings = {
    retries : 4,
    minTimeout: 1000,
    maxTimeout: 3000
}

module.exports = {
	checkStatus,
	promiseSettings,
    getLocalFile,
    writeLocalFile
}
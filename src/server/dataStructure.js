const fs = require('fs')
const { normalize, schema } = require('normalizr')
const utilities = require('./utilities.js')
require('dotenv').config() //get creds from .env

/* 

    write functions here using normalize
    to sort data to correct redux format before returning

*/

/* 
    standard norming for an obj that has one layer of nesting + ids as main attribute
*/
const normIDs = ( data, name ) => {
    const contentSchema = new schema.Entity(name, {}, {idAttribute : 'id'})
    const contentListSchema = [contentSchema]
    return normalize(data, contentListSchema)
}

module.exports = { normIDs }
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/46772067d3a01caf28a31814a53a80e2/' + latitude + ',' + longitude + '?units=si'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Couldn’t connect to forecast service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const msg = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.'
            callback(undefined, msg)
        }
    }) 
}

module.exports = forecast
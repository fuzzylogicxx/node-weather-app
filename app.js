const request = require('request')

const url = "https://api.darksky.net/forecast/46772067d3a01caf28a31814a53a80e2/37.8267,-122.4233?units=si"

request({ url: url, json: true }, (error, response) => {
   //console.log('It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
   console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})


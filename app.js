const request = require('request')
const geocode = require('./utils/geocode')

// DarkSky (weather requests)

// const url = "https://api.darksky.net/forecast/46772067d3a01caf28a31814a53a80e2/37.8267,-122.4233?units=si"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//     }
// })

// MapBox (geocoding)

// const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnV6enlsb2dpYyIsImEiOiJjazBsZDgyeDUwc2k5M2RwYmhodWxoZHE2In0.w1CGHgEJOzuK88BGkB5R-w&limit=1"

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to geocoding service')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(longitude, ',', latitude)
//     }
// })

// const add = (first, second, callback) => {
//     setTimeout(() => {
//         const sum = first + second

//         callback(sum)
//     }, 2000);
// } 

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

geocode('Glasgow', (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})
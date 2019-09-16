const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userLocation = process.argv[2];

geocode(userLocation, (error, data) => {
    if (!userLocation) {
        return console.log('Please provide a location.')
    }
    
    if (error) {
        return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})

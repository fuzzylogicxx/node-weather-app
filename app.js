const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userLocation = process.argv[2];

geocode(userLocation, (error, { latitude, longitude, location }) => {
    if (!userLocation) {
        return console.log('Please provide a location.')
    }
    
    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
    })
})

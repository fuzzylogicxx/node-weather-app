const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Sert up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up directory to serve
app.use(express.static(publicDirectoryPath))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App', 
        name: 'Laurence Hughes'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About', 
        name: 'Laurence Hughes'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help', 
        name: 'Laurence Hughes', 
        helpMsg: 'Help me Obi-wan'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error // key and val have same name so use object shorthand syntax
            })
        }

        forecast(latitude, longitude, (error, forecastDetail) => {
            if (error) {
                return res.send({
                    error
                })
            }

            res.send({
                forecast: forecastDetail, 
                address: req.query.address,
                location
                
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Oops – 404', 
        errorMsg: 'Help article not found', 
        name: 'Laurence Hughes'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Oops – 404', 
        errorMsg: 'Page not found', 
        name: 'Laurence Hughes'
    })
})

app.listen(3000, () => {
    console.log('App is up on port 3000')
})
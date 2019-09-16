const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
    res.send({
            forecast: 'Sunny', 
            location: 'Glasgow'
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
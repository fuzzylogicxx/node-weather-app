const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.send({
            forecast: 'Sunny', 
            location: 'Glasgow'
    })
})



app.listen(3000, () => {
    console.log('App is up on port 3000')
})
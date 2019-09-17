const weatherForm = document.querySelector('#weather-form')
const search = document.querySelector('#search')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    
    if (location === '') {
        console.log('Please provide a location')
    } else {
        messageOne.textContent = 'Loading…'
        messageTwo.textContent = ''
        fetch('http://localhost:3000/weather/?address=' + location).then(response => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            })
        })
    }
})
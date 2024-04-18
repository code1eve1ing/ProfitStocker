const express = require('express')
const port = 3000

// Create an instance of Express
const app = express()

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!')
})
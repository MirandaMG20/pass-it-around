const express = require('express')
const app = express()
const port = 3000

// Listener
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})

// Route for the home page
app.get('/', (req, res) => {
    res.send(`
    <h1> 99 bottles of wine on the wall </h1> 
    <a href='/98'> Take one down, pass it around. </a>
    `)
})

// Route for counting down bottles
app.get('/:number_of_bottles', (req, res) => {
    const numberOfBottles = req.params.number_of_bottles
    if (req.params.number_of_bottles > 0) {
        res.send(`
        <h1>${req.params.number_of_bottles} bottles of wine on the wall </h1> <br> 
        <a href='/${req.params.number_of_bottles - 1}'> Take one down, pass it around. </a>
        `)
    } else {
        res.send(`
        <h1>${req.params.number_of_bottles} bottles of wine on the wall</h1> <br>
        <a href='/'> Start Over </a>
        `)
    }
})


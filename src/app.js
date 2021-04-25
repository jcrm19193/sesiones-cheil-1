const express = require('express')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("hello")
});

app.listen(port, '0.0.0.0', () => {
    console.log(`process listen at port ${port}`)
});
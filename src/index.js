const express = require('express')

const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).send({
        message:'You got me!'
    })
})

app.listen(port)
console.log('Application running in http://localhost:'+String(port))
import express from 'express'
import bodyParser from 'body-parser';
import UserController from './controllers/user.js';

const app = express()
const port = process.env.PORT || 5000;
const jsonParser = bodyParser.json()

app.use(jsonParser)

app.get('/', (req, res) => {
    res.status(200).send({
        message:'You got me!'
    })
})

app.get('/user', UserController.getAllUsers)

app.listen(port)
console.log('Application running in http://localhost:'+String(port))
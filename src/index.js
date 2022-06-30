import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'

import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'

const app = express()
const port = process.env.PORT || 5000;
const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(cors())

app.use('/user', userRoutes)
app.use('/auth', authRoutes)


app.listen(port)
console.log('Application running in http://localhost:'+String(port))
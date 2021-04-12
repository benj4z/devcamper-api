const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bootcamps = require('./routers/bootcamps')
const connectDb = require('./config/db')

dotenv.config({path: './config/config.env'})

connectDb();

const app = express()

const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json)

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(PORT, console.log(`Server on ${PORT}`))

// Handle promise rejection

process.on('unhandledRejection', (err, promise) => {
    console.log(`Unhandler Rejection: ${err.message}`)
    server.close(() => process.exit(1))
})
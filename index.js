require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/database.js')
const v1DataRouter = require('./src/v1/routes/dataRoutes')

// Start Express -----------------
const app = express()

if (process.env.NODE_ENV !== 'test') { // prevent EADDRINUSE in parallel tests
  app.set('port', process.env.APP_PORT || 9000)
}

// Middlewares -------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: process.env.DATA_COLLECTOR_ENDPOINT
}))

// Connect Database --------------
connectDB()

// Routes ------------------------
app.get('/api', (req, res) => {
  res.send('Welcome to DBApi')
})

app.use('/api/v1/sustainability', v1DataRouter)

// Server running ----------------
const server = app.listen(app.get('port'), function () {
  console.log(`🚀 DBApi listening on port ${app.get('port')}`)
})

module.exports = { app, server }

const express = require('express')
const router = express.Router()
const sustainabilityController = require('../../controllers/sustainabilityController')

router
  .post('/upload-data', sustainabilityController.saveData)

module.exports = router
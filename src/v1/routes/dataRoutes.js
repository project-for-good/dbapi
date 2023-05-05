const express = require('express')
const router = express.Router()
const dataController = require('../../controllers/dataController')

router
  .post('/upload-data', dataController.saveData)

module.exports = router

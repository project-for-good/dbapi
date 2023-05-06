const express = require('express')
const router = express.Router()
const dataController = require('../../controllers/dataController')

router
  .post('/accuwheater', dataController.saveAccuwheaterData)
  .post('/motor', dataController.saveFuelPricesMotorData)
  .post('/urbanIne', dataController.saveUrbanTravelsIneData)
  .post('/vehicles', dataController.saveVehiclesData)
  .post('/populationIne', dataController.savepopulationIneData)

module.exports = router

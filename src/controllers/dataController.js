const DataService = require('../services/dataService')

const saveAccuwheaterData = (req, res) => {
  DataService
    .saveAccuwheaterData(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ message: error }))
}

const saveFuelPricesMotorData = (req, res) => {
  DataService
    .saveFuelPricesMotorData(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ message: error }))
}

const savepopulationIneData = (req, res) => {
  console.log(req.body)
  DataService
    .savePopulationIneData(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ message: error }))
}

const saveUrbanTravelsIneData = (req, res) => {
  console.log(req.body)
  DataService
    .saveUrbanTravelsIneData(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ message: error }))
}

const saveVehiclesData = (req, res) => {
  console.log(req.body)
  DataService
    .saveVehiclesData(req.body)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(400).json({ message: error }))
}

module.exports = {
  saveAccuwheaterData,
  saveFuelPricesMotorData,
  savepopulationIneData,
  saveUrbanTravelsIneData,
  saveVehiclesData
}

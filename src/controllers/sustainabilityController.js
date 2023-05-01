const SustainabilityService = require('../services/sustainabilityService')
// const controllerUtils = require('../utils/controllerUtils')

const saveData = (req, res) => {
  SustainabilityService
    .saveData()
    .then(() => res.status(200))
    .catch((error) => res.status(400).json({ message: error }))
}

module.exports = {
  saveData
}
const DataService = require('../services/dataService')

const saveData = (req, res) => {
  DataService
    .saveData()
    .then(() => res.status(200))
    .catch((error) => res.status(400).json({ message: error }))
}

module.exports = {
  saveData
}

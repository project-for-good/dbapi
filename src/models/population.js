const mongoose = require('mongoose')

const PopulationSchema = new mongoose.Schema(
  {
    Location: {
      type: String
    },
    age: {
      type: Number
    },
    year: {
      type: Number
    },
    population: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Population', PopulationSchema)

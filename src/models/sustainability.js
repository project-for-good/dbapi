const mongoose = require('mongoose')

const SustainabilitySchema = new mongoose.Schema(
  {
    test: {
      type: Array
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Sustainability', SustainabilitySchema)

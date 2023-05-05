const mongoose = require('mongoose')

const FuelSchema = new mongoose.Schema(
  {
    province: {
      type: String
    },
    type: {
      type: String
    },
    price_per_liter: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Fuel', FuelSchema)

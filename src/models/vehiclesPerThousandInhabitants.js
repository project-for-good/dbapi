const mongoose = require('mongoose')

const VehiclesPerThousandInhabitantsSchema = new mongoose.Schema(
  {
    municipality: {
      type: String
    },
    year: {
      type: Number
    },
    total: {
      type: Number
    },
    passengers_cars: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('VehiclesPerThousandInhabitantsSchema', VehiclesPerThousandInhabitantsSchema)

const mongoose = require('mongoose')

const VehiclesPerThousandInhabitantsSchema = new mongoose.Schema(
  {
    municipality: {
      type: String
    },
    year: {
      type: Number
    },
    type: {
      type: String
    },
    value: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('VehiclesPerThousandInhabitants', VehiclesPerThousandInhabitantsSchema)

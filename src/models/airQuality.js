const mongoose = require('mongoose')

const AirQualitySchema = new mongoose.Schema(
  {
    municipality: {
      type: String
    },
    aqi: {
      type: String
    },
    o_3: {
      type: Number
    },
    pm_2_5: {
      type: Number
    },
    pm_10: {
      type: Number
    },
    no_2: {
      type: Number
    },
    co: {
      type: Number
    },
    so_2: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('AirQuality', AirQualitySchema)

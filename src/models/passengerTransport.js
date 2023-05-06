const mongoose = require('mongoose')

const PassengerTransportSchema = new mongoose.Schema(
  {
    municipality: {
      type: String
    },
    transport_type: {
      type: String
    },
    name: {
      type: String
    },
    date: {
      type: Date
    },
    value: {
      type: Number
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('PassengerTransport', PassengerTransportSchema)

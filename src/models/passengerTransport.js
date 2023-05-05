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
    data: [
      {
        year: {
          type: Number
        },
        month: {
          type: Number
        },
        value: {
          type: Number
        }
      }
    ]

  },
  { timestamps: true }
)

module.exports = mongoose.model('PassengerTransport', PassengerTransportSchema)

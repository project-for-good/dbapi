require('dotenv').config()
const mongoose = require('mongoose')

const db = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    )

    console.log('Database is Connected...')
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB

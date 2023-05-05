const SustainabilitySchema = require('../models/sustainability')

const saveData = async (ownerId, secondUserId) => {
  try {
    const sustainabilityParameters = {
      members: [ownerId, secondUserId],
      draft: true,
      owners: [ownerId]
    }
    const sustainability = new SustainabilitySchema(sustainabilityParameters)
    await sustainability.save()
  } catch (error) {
    return error
  }
}

module.exports = {
  saveData
}

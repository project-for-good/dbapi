const AirQualitySchema = require('../models/airQuality')
const FuelSchema = require('../models/fuel')
const PopulationSchema = require('../models/population')
const PassengerTransportSchema = require('../models/passengerTransport')
const VehiclesPerThousandInhabitantsSchema = require('../models/vehiclesPerThousandInhabitants')

const saveAccuwheaterData = async (data) => {
  try {
    const airQualityParams = {
      municipality: data.municipality,
      aqi: data.aqi,
      o_3: data.o_3,
      pm_2_5: data.pm_2_5,
      pm_10: data.pm_10,
      no_2: data.no_2,
      co: data.co,
      so_2: data.so_2
    }

    const airQuality = new AirQualitySchema(airQualityParams)
    await airQuality.save()
    return { success: 'true' }
  } catch (error) {
    console.log(error)
    return error
  }
}

const saveFuelPricesMotorData = async (data) => {
  try {
    data.forEach(async result => {
      const element = {
        province: result.province,
        type: result.fuelType,
        price_per_liter: result.result
      }
      const fuel = new FuelSchema(element)
      await fuel.save()
    })
    return FuelSchema.find({ province: 'Baleares' })
  } catch (error) {
    return error
  }
}

const savePopulationIneData = async (data) => {
  try {
    data.forEach(async result => {
      const element = {
        Location: result.location,
        age: result.age,
        year: result.year,
        population: result.data
      }
      const population = new PopulationSchema(element)
      await population.save()
    })

    return PopulationSchema.find({ Location: '04 Balears, Illes' })
  } catch (error) {
    return error
  }
}

const saveUrbanTravelsIneData = async (data) => {
  try {
    data.forEach(async result => {
      const month = result.params[3].split('M')[1]
      const year = result.params[3].split('M')[0]
      const element = {
        municipality: result.params[1],
        transport_type: result.params[0],
        name: result.params[2],
        date: new Date(`${year}/${month}/01`),
        value: result.result
      }
      console.log(element)
      const PassengerTransport = new PassengerTransportSchema(element)
      await PassengerTransport.save()
    })

    return PassengerTransportSchema.find({ municipality: '07040 Palma' })
  } catch (error) {
    return error
  }
}

const saveVehiclesData = async (data) => {
  try {
    data.forEach(async result => {
      const element = {
        municipality: result.municipality,
        year: result.year,
        type: result.total,
        value: result.passengers_cars
      }
      const vehicles = new VehiclesPerThousandInhabitantsSchema(element)
      await vehicles.save()
    })

    return VehiclesPerThousandInhabitantsSchema.find({ municipality: 'MALLORCA' })
  } catch (error) {
    return error
  }
}

module.exports = {
  saveAccuwheaterData,
  saveFuelPricesMotorData,
  savePopulationIneData,
  saveUrbanTravelsIneData,
  saveVehiclesData
}

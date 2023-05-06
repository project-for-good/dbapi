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
    const fuelParams = {
      province: data.province,
      type: data.type,
      price_per_liter: data.result
    }
    const fuel = new FuelSchema(fuelParams)
    await fuel.save()
    return { success: 'true' }
  } catch (error) {
    return error
  }
}

const savePopulationIneData = async (data) => {
  try {
    const populationParams = {
      Location: data.location,
      age: data.age,
      year: data.year,
      population: data.data
    }
    const population = new PopulationSchema(populationParams)
    await population.save()
  } catch (error) {
    return error
  }
}

const saveUrbanTravelsIneData = async (data) => {
  try {
    const urbanTravelsParams = {
      municipality: data.params[1],
      transport_type: data.params[0],
      name: data.params[2],
      date: data.params[3],
      value: data.result
    }
    const PassengerTransport = new PassengerTransportSchema(urbanTravelsParams)
    await PassengerTransport.save()
  } catch (error) {
    return error
  }
}

const saveVehiclesData = async (data) => {
  try {
    const urbanTravelsParams = {
      municipality: data.municipality,
      year: data.year,
      total: data.total,
      passengers_cars: data.passengers_cars
    }
    const vehicles = new VehiclesPerThousandInhabitantsSchema(urbanTravelsParams)
    await vehicles.save()
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

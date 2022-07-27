
const axios = require('axios');
const { AirQuality } = require('../models');

let getAirQuality = async (lat,lon) => {

  console.log('check-params',lat, lon);
  
  const params = {
    lat: lat,
    lon: lon,
    key: process.env.API_KEY
  };
   try {
 
     let res = await axios.get('http://api.airvisual.com/v2/nearest_city',{ params })

     let data = res.data
     return data
  } catch (err) {
    console.error(err);
    throw err;
  }
};
let addAirQuality= async (body) => {
  let airQuality = new AirQuality(body);
  try {
    return await airQuality.save();
  } catch (err) {
    console.error(err);
    throw err;
  }
}



module.exports = {
  getAirQuality,
  addAirQuality
};

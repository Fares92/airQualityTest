const CronJob = require('cron').CronJob;
const controller = require("../controllers").airQuality;
 
latParis=48.856613
lonParis=2.352222
const airQualityParis = new CronJob('* * * * *', async function() {
    
        console.log('******running every minute******');
        /*get result for api*/
        let result =await controller.getAirQuality(latParis,lonParis);
        /*extract data from result*/
        let city = result.data.city
        let pollution = result.data.current.pollution
        /*create body to add */
        let body = {
            city: city,
            ts: pollution.ts,
            aqius: pollution.aqius,
            mainus: pollution.mainus,
            aqicn: pollution.aqicn,
            maincn: pollution.maincn,
          };
        /* create new airQuality object */
        await controller.addAirQuality(body)


      
  }, null, true, 'Africa/Tunis');

  module.exports = {
    airQualityParis,
  };
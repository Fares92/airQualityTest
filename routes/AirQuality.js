const userRoutes = require("express").Router();
const controller = require("../controllers").airQuality;

/**
 * get airquality
 */

 userRoutes.get('/airQuality/:lat/:lon', async (req, res) => {
  console.log('air quality');
    try {
        
        let result =await controller.getAirQuality(req.params.lat,req.params.lon);
        console.log(result);
        res.json({
            success: true,
            message: "result returned successfully",
            data : result
        })
    } catch (err) {
        console.error(err);
        // res.boom.badImplementation("Error while saving form to database", {
        //     err: err.message
        // });
    }

})

/**
 * User login via Takiacademy
 */

module.exports = userRoutes;

var express = require('express')
var router = express.Router();

/**
 * airQuality routes
 */
router.use( require('./AirQuality'))


module.exports = router
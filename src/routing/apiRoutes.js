const path = require('path');
require('dotenv').config();
require('xhr2').XMLHttpRequest;
let ratesObj = require("../model/ratesModel.js");

// export API routes
module.exports = (app) => {
    // API get function to retrieve JSON from /data/rates
    app.get('/api/rates', ratesObj.logRates);
    console.log("apiRoutes\n");
}
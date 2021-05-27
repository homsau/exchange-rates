let ratesObj = require("../model/ratesModel.js");

module.exports.logRates = (req, res, next) => {
    let rates = ratesObj.logRates();
    console.log("appController\n");
    res.render('menu', { rates });
}
// const http = require('http');
// require('url');

let ratesObj = require("../model/ratesModel.js");

module.exports.logRates = (req, res, next) => {
    let rates = ratesObj.logRates();
    console.log("appController\n");
    res.render('menu', { rates });
}

// module.exports = http.createServer((req, res) => {
//     var service = require('./index.js');
//     const reqUrl = new URL(req.url, true);

//     // GET Endpoint
//     if (reqUrl.pathname == '/sample' && req.method === 'GET') {
//         console.log('Request Type:' +
//             req.method + ' Endpoint: ' +
//             reqUrl.pathname);

//         service.sampleRequest(req, res);

//         // POST Endpoint
//     } else if (reqUrl.pathname == '/test' && req.method === 'POST') {
//         console.log('Request Type:' +
//             req.method + ' Endpoint: ' +
//             reqUrl.pathname);

//         service.testRequest(req, res);

//     } else {
//         console.log('Request Type:' +
//             req.method + ' Invalid Endpoint: ' +
//             reqUrl.pathname);

//         service.invalidRequest(req, res);

//     }
// })


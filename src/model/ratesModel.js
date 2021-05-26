// set endpoint and your API key
const endpoint = 'latest';
const access_key = process.env.ACCESS_KEY;
const url = "http://api.exchangeratesapi.io/v1/" + endpoint 
		  + "?access_key=" + access_key;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let ratesObj = {};

getRates = async () => {
	// Instantiate a new XHR Object
	const xhr = new XMLHttpRequest();
	return new Promise(function(resolve, reject) {
		// Open an obejct (GET/POST, PATH, ASYN-TRUE/FALSE)
		xhr.open('GET', url, true)
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status >= 300) {
					reject("Error, status code = " + xhr.status)
				} else {
					resolve(xhr.responseText);
				}
			}
		}
	xhr.send(JSON.stringify(ratesObj.body));
	});
}

exports.logRates = async () => {
	try {
		ratesObj = await getRates();
		// Changing string data into JSON Object
		ratesObj = JSON.parse(ratesObj);
		console.log('logRates function:\t' + ratesObj.rates.AED);
		
	} catch (err) {
		  console.log(err);
	}
	// console.log(ratesObj.rates.AED);
	return ratesObj.rates;
}
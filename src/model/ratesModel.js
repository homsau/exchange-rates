// date today
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear()
let date = yyyy + "-" + mm + "-" + dd;

// set endpoint and your API key
const endpoint = 'historical';

const access_key = process.env.ACCESS_KEY;
const url = "http://api.exchangeratesapi.io/v1/" + date 
		  + "?access_key=" + access_key;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let ratesObj = {};

getRates = async (callback) => {
	// Instantiate a new XHR Object
	const xhr = new XMLHttpRequest();
	
	return new Promise(function(resolve, reject) {
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status >= 300) {
					reject("Error, status code = " + xhr.status)
				} else { // if data found
					resolve(xhr.responseText); // return responseText
				}
			}
		}
		// Open an obejct (GET/POST, PATH, ASYN-TRUE/FALSE)
		xhr.open('GET', url, true);
		xhr.setRequestHeader("Content-Type", "text/xml");
		xhr.send(JSON.stringify(ratesObj));
	});
}

module.exports.logRates = async (req, res) => {
	try {
		ratesObj = await getRates(); // call getRates()
		// Changing string data into JSON Object
		ratesObj = JSON.parse(ratesObj);
		
	} catch (err) {
		  console.log(err);
	}
	res.send(ratesObj); // return results
}
const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
require('xhr2').XMLHttpRequest;
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
})

server.listen(PORT, () => {
    console.log("App listening on PORT: %s", PORT);
})

// set endpoint and your API key
const endpoint = 'latest';
const access_key = process.env.ACCESS_KEY;

function loadCurrency() {
    // Instantiate an new XHR Object
    const XMLHttpRequest = require('xhr2');
    const req = new XMLHttpRequest();

    // Open an obejct (GET/POST, PATH, ASYN-TRUE/FALSE)
    req.open("GET", "http://api.exchangeratesapi.io/v1/" + endpoint 
        + "?access_key=" + access_key);

    // When response is ready
    req.onload = function () {
        if (this.status === 200) {

            // Changing string data into JSON Object
            curr = JSON.parse(this.responseText);

            console.log(curr)
        }
        else {
            console.log("File not found");
        }
    }
    req.send();
    console.log(req);
}
loadCurrency();
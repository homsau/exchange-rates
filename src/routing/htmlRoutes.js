const path = require('path');
require('body-parser');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
};
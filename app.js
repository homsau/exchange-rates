// Node.js Express Backend Framework used for server
const express = require('express');
let app = express();
require('body-parser');
const path = require('path');

// Set up Express
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.static(path.join(__dirname, "./src/public")));

// Router
const router = express.Router();
app.use(router);

require('./src/routing/htmlRoutes')(app);
require('./src/routing/apiRoutes')(app);
const rates = require('./src/public/index.js');

// Listener
app.listen(PORT, () => {
    console.log("App listening on: http://localhost:%s", PORT);
})


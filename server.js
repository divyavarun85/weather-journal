// Setup empty JS object to act as endpoint for all routes
const projectData = {};
/* Fetchn */
const fetch = require("node-fetch");
// Require Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express()

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
app.listen(port,listening);
function listening(){
   
console.log("server running");
console.log('Express listening on port', this.address().port);
}



const weatherDetails =[];
app.post('/weatherDetails',processWeather)

function processWeather(req,res) {
    //console.log(req.body);

    newDetailsEntry = {
        Zip :req.body.Zip,
        userFeelings : req.body.userFeelings,
        Date:req.body.Date,
        Temperature :req.body.Temperature,
        userResponse :req.body.userResponse
    }
    weatherDetails.push(newDetailsEntry);
    res.send(weatherDetails);
    console.log(weatherDetails);
}

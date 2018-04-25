const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a  : {
             demand: true,
             alias: 'address',
             describe: 'To fetch weather for',
             string: true
        }
    })
    .help() 
    .alias('help', 'h')
    .argv;

    var encodedAddress = encodeURIComponent(argv.address);
    const googleAPIKey = 'AIzaSyDQEEHdooI8i8v2WdijsjQRBkEIYStJe-Y';
    const darkSkyAPIKey = 'a2fce8b057cfa0d05aced2e089df36e0';
    const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPIKey}`;
    
 
axios.get(geocodeURL).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error('Unable to find that address')
    } 
    
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/${darkSkyAPIKey}/${lat},${lng}?units=auto`;
    console.log(response.data.results[0].formatted_address);
    
    return axios.get(weatherURL);

}).then((response) => {
    console.log(response.data.statusCode);
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === "ENOTFOUND") {
        console.log('Unable to connect to API servers');
    } else if (e.status !== 200) {
        console.log('Request failed to weather API servers');
    } else {
        console.log(e.message);
    }
})
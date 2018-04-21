const request = require('request');

const uri = 'https://maps.googleapis.com/maps/api/geocode/json?address=Jeanette Gardens 2 Pulang Lupa Uno Las Pinas&key=AIzaSyDQEEHdooI8i8v2WdijsjQRBkEIYStJe-Y';

request(uri, {
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longlitude: ${body.results[0].geometry.location.lng}`);
});
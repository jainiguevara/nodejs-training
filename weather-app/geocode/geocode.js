const request = require('request');

const googleAPIKey = 'AIzaSyDQEEHdooI8i8v2WdijsjQRBkEIYStJe-Y';

geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPIKey}`, {
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google servers');
        } else if (body.status === "ZERO_RESULTS") {
            callback("Address not found");
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                location: body.results[0].address_components[2].long_name,
                latitude: body.results[0].geometry.location.lat,
                longlitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};
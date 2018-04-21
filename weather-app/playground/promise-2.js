const request = require('request');

const googleAPIKey = 'AIzaSyDQEEHdooI8i8v2WdijsjQRBkEIYStJe-Y';

geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
        request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPIKey}`, {
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google servers');
            } else if (body.status === "ZERO_RESULTS") {
                reject("Address not found");
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    location: body.results[0].address_components[2].long_name,
                    latitude: body.results[0].geometry.location.lat,
                    longlitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) => {
    console.log(errorMessage);
});
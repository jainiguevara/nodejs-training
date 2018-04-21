const request = require('request');

const darkSkyAPIKey = 'a2fce8b057cfa0d05aced2e089df36e0';

getCurrent = (lat, lng, callback) => {
    request(`https://api.darksky.net/forecast/${darkSkyAPIKey}/${lat},${lng}?units=auto`,{
        json: true
    }, (error, response, body) => {
        debugger;
        if (error) {
            callback('Unable to reach weather forecast servers');
        } else if (response.statusCode !== 200) {
            callback(response.statusMessage);
        } else {
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    })
};

module.exports = {
    getCurrent
};
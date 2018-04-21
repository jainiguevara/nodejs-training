const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

if (argv.address) {
    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                if (results) {
                    console.log(results.address)
                    weather.getCurrent(results.latitude, results.longlitude, (errorMessage, results) => {
                        if (errorMessage) {
                            console.log(errorMessage)
                        } else {
                            console.log(`It's currently ${results.temperature}. It feels like ${results.apparentTemperature}.`);
                        }
                    })
                } else {
                    console.log(results);
                }
            }
    });
} else {
    console.log('Address empty');
}
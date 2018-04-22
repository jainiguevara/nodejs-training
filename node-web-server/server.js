const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Middelwares
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();

    console.log(`${now} ${req.method} ${req.url}`)
    next();
});

//Handlebars Helpers
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home',
        welcomeMessage: 'Welcome to my website!',
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About Page',
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
var request = require('request');
const rootURL = 'https://api.chucknorris.io/jokes/random';

module.exports = {
    index
}

function index(req, res) {
    request(rootURL, function (err, response, body) {
        const joke = JSON.parse(body)
        res.render('index', {
            joke: joke.value
        })
    })
}
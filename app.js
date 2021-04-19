require("dotenv").config();
var request = require("request");

var options = {
  method: 'GET',
  url: 'https://v3.football.api-sports.io/predictions',
  qs: {fixture: 592816},
  headers: {
    'x-rapidapi-host': process.env.API_HOST,
    'x-rapidapi-key': process.env.API_KEY
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

  const obj = JSON.parse(body)

 
	console.log(`home team: ${obj.response[0].teams.home.name}, probability: ${obj.response[0].comparison.poisson_distribution.home} \n

  away team ${obj.response[0].teams.away.name}, probability: ${obj.response[0].comparison.poisson_distribution.away} `);
});



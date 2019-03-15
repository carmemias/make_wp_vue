// See https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31
// and https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

const request = require('request');
const cheerio = require('cheerio');

const ScrapeTeams = function(){

	request('https://cors-anywhere.herokuapp.com/https://make.wordpress.org/', function (error, response, html) {
		if (!error && response.statusCode == 200) {
			const $ = cheerio.load(html);

			const teamsList = [];

			const articles = $('.js-masonry > article');

			articles.each(function(index, element){
				teamsList[index] = {};

				teamsList[index]['name'] = $(element).find('h2 > a').text();
				teamsList[index]['url'] = $(element).find('h2 > a').attr('href');
				teamsList[index]['description'] = $(element).find('.team-description > p:first-child').text();
				teamsList[index]['officeHours'] = $(element).find('small > p:first-child').text();
				teamsList[index]['slackChannel'] = $(element).find('small > p:last-child').text();

			});

			// console.log(teamsList);
			return teamsList;
		}
	});

}

ScrapeTeams();



// module.exports = ScrapeTeams;

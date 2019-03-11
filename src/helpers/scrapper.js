// See https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31
// and https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
// const request = require('request');
// const cheerio = require('cheerio');
//
// const ScrapeTeams = function(){
//
// 	request('https://cors-anywhere.herokuapp.com/https://make.wordpress.org/', function (error, response, html) {
// 		if (!error && response.statusCode == 200) {
// 			const $ = cheerio.load(html);
//
// 			const teamsList = [];
//
// 			const articles = $('.js-masonry > article');
//
// 			articles.each(function(index, element){
// 				teamsList[index] = {};
//
// 				teamsList[index]['name'] = $(element).find('h2 > a').text();
// 				teamsList[index]['url'] = $(element).find('h2 > a').attr('href');
// 				teamsList[index]['description'] = $(element).find('.team-description > p:first-child').text();
// 				teamsList[index]['officeHours'] = $(element).find('small > p:first-child').text();
// 				teamsList[index]['slackChannel'] = $(element).find('small > p:last-child').text();
//
// 			});
//
// 			// console.log(teamsList);
// 			return teamsList;
// 		}
// 	});
//
// }
//
// const teams = ScrapeTeams();

const teams = [
	{
		name: 'Core',
		url: 'https://make.wordpress.org/core/',
		description:
		'The core team makes WordPress. Whether you’re a seasoned PHP developer or are just learning to code, we’d love to have you on board. You can write code, fix bugs, debate decisions, and help with development.',
		officeHours: 'Weekly chats: Wednesdays @ 21:00 UTC',
		slackChannel: '#core on Slack'
	},
	{
		name: 'Design',
		url: 'https://make.wordpress.org/design/',
		description:
		'The design group is focused on the designing and developing the user interface. It’s a home for designers and UXers alike. There are regular discussions about mockups, design, and user testing.',
		officeHours: 'Weekly chats: Wednesdays @ 19:00 UTC',
		slackChannel: '#design on Slack'
	},
	{
		name: 'Mobile',
		url: 'https://make.wordpress.org/mobile/',
		description:
		'The mobile team builds the iOS and Android apps. Lend them your Java, Objective-C, or Swift skills. The team also needs designers, UX experts, and testers to give users an smooth experience on every device.',
		officeHours: '',
		slackChannel: ''
	},
	{
		name: 'Accessibility',
		url: 'https://make.wordpress.org/accessibility/',
		description:
		'The a11y group provides accessibility expertise across the project. They make sure that WordPress core and all of WordPress’ resources are accessible.',
		officeHours: 'Weekly chats: Fridays @ 15:00 UTC',
		slackChannel: '#accessibility on Slack'
	},
	{
		name: 'Polyglots',
		url: 'https://make.wordpress.org/polyglots/',
		description:
		'WordPress is used all over the world and in many different languages. If you’re a polyglot, help out by translating WordPress into your own language. You can also assist with creating the tools that make translations easier.',
		officeHours: 'Weekly chats: Wednesdays @ 10:00 UTC',
		slackChannel: '#polyglots on Slack'
	},
	{
		name: 'Support',
		url: 'https://make.wordpress.org/support/',
		description:
		'Answering a question in the support forums or IRC is one of the easiest ways to start contributing. Everyone knows the answer to something! This blog is the place for discussion of issues around support.',
		officeHours: 'Weekly chats: Thursdays @ 17:00 UTC',
		slackChannel: '#forums on Slack'
	},
	{
		name: 'Documentation',
		url: 'https://make.wordpress.org/docs/',
		description:
		'Good documentation lets people help themselves when they get stuck. The docs team is responsible for creating documentation and is always on the look-out for writers. The blog has discussion around the team’s current projects.',
		officeHours: 'Weekly chats: Thursdays @ 18:00 UTC',
		slackChannel: '#docs on Slack'
	},
	{
		name: 'Themes',
		url: 'https://make.wordpress.org/themes/',
		description:
		'The Theme Review Team reviews and approves every Theme submitted to the WordPress Theme repository. Reviewing Themes sharpens your own Theme development skills. You can help out and join the discussion on the blog.',
		officeHours: 'Weekly chats: Tuesdays @ 18:00 UTC',
		slackChannel: '#themereview on Slack'
	},
	{
		name: 'Plugins',
		url: 'https://make.wordpress.org/plugins/',
		description:
		'If you are a Plugin developer, subscribe to the Plugin review team blog to keep up with the latest updates, find resources, and learn about any issues around Plugin development.',
		officeHours: '',
		slackChannel: ''
	},
	{
		name: 'Community',
		url: 'https://make.wordpress.org/community/',
		description:
		'If you’re interested in organizing a meetup or a WordCamp, the community blog is a great place to get started. There are groups working to support events, to create outreach and training programs, and generally support the community.',
		officeHours: '',
		slackChannel: ''
	},
	{
		name: 'Meta',
		url: 'https://make.wordpress.org/meta/',
		description:
		'The Meta team makes WordPress.org, provides support, and builds tools for use by all the contributor groups. If you want to help make WordPress.org better, sign up for updates from the Meta blog.',
		officeHours: '',
		slackChannel: ''
	},
	{
		name: 'Training',
		url: 'https://make.wordpress.org/training/',
		description:
		'The training team creates downloadable lesson plans and related materials for instructors to use in a live workshop environment. If you enjoy teaching people how to use and build stuff for WordPress, immediately stop what you’re doing and join our team!',
		officeHours: 'Weekly chats: Thursdays @ 19:30 UTC',
		slackChannel: '#training on Slack'
	},
	{
		name: 'Test',
		url: 'https://make.wordpress.org/test/',
		description:
		'The Test team patrols flow across the entire WordPress ecosystem on every device we have at hand. We test, document, and report on the WordPress user experience. Through continuous dogfooding and visual records, we understand not only what is wrong, but also what is right. We immerse ourselves in the context of what we are making and champion user experience.',
		officeHours: '',
		slackChannel: ''
	},
	{
		name: 'TV',
		url: 'https://make.wordpress.org/tv/',
		description:
		'The TV team reviews and approves every video submitted to WordPress.tv. They also help WordCamps with video post-production and are responsible for the captioning and subtitling of published videos. Reviewing videos is a great way to learn about WordPress and help the community: experience is not required to get involved.',
		officeHours: 'Weekly chats: Thursdays @ 17:00 UTC',
		slackChannel: '#wptv on Slack'
	},
	{
		name: 'Marketing',
		url: 'https://make.wordpress.org/marketing/',
		description:
		'Our vision for the Marketing Team is to be the go-to resource for strategy and content for other WordPress teams.',
		officeHours: 'Weekly chats: Wednesdays @ 15:00 UTC',
		slackChannel: '#marketing on Slack'
	},
	{
		name: 'CLI',
		url: 'https://make.wordpress.org/cli/',
		description:
		'WP-CLI is the official command line tool for interacting with and managing your WordPress sites.',
		officeHours: 'Weekly chats: Tuesdays @ 1600 UTC',
		slackChannel: '#cli on Slack'
	},
	{
		name: 'Hosting',
		url: 'https://make.wordpress.org/hosting/',
		description:
		'We collaborate here on best hosting practices and tools for the community. If you have experience hosting WordPress, we’d love to have you join us!',
		officeHours: 'Weekly chats: Wednesdays @ 18:00 UTC',
		slackChannel: '#hosting-community on Slack'
	},
	{
		name: 'Tide',
		url: 'https://make.wordpress.org/tide/',
		description:
		'Tide is a series of automated tests run against every plugin and theme in the directory and then displays PHP compatibility and test errors/warnings in the directory.',
		officeHours: 'Weekly chats: Tuesdays @ 2200 UTC',
		slackChannel: '#tide on Slack'
	}
]

export default teams;

// module.exports = ScrapeTeams;

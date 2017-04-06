var Twit = require('twit')
var qs = require('querystring')
const request = require('request');
const oauth = require('./twitter_config');

var userName = 'northcoders';
var url = `https://api.twitter.com/1.1/search/tweets.json?q=${userName}`;

request.get({url, oauth}, function (e, r, b) {
    console.log(JSON.parse(b));
});
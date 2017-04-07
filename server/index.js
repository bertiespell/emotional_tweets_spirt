var Twit = require('twit');
var qs = require('querystring');
const request = require('request');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const async = require('async');
const twitterConfig = require('../twitter_config.js');
const watsonConfig = require('../watson_config');

var personality_insights = new PersonalityInsightsV3({
  username: watsonConfig.username,
  password: watsonConfig.password,
  version_date: watsonConfig.version_date
});

// const oauth = require('./twitter_config');

var T = new Twit({
    consumer_key: twitterConfig.consumer_key,
    consumer_secret: twitterConfig.consumer_secret,
    access_token: twitterConfig.access_token,
    access_token_secret: twitterConfig.access_token_secret
});

function getTweets(done) {
  T.get('statuses/user_timeline', { q: 'realDonaldTrump', count: 100 }, function (err, data, response) {
    if (err) {
      return done(err);
    }
    let tweetText = '';
    data.forEach(function (eachTweet) {
      const tweet = eachTweet.text.split(' ');
      const filteredTweet = tweet.filter(function (word) {
        return !/(@|#|https)/.test(word);
      });
      let newTweets = '';
      filteredTweet.forEach(function (el) {
        newTweets += el + ' ';
      });
      tweetText += newTweets + ' ';
    });
    done(null, tweetText);
  });
}

// console.log(tweetText); nwat24 [4:19 PM] 
// https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${userName}&count=100&include_rts=false

function personalityInsights(tweetText, done) {
  personality_insights.profile({
    text: tweetText,
    consumption_preferences: true
  },
    function (err, response, body) {
      if (err) console.log('error:', err);
      else done(null, JSON.stringify(response, null, 2));
    });
}

async.waterfall([getTweets, personalityInsights], function (error, result) {
  if (error) {
    return console.log('FUCK');
  }
  console.log(result);
})


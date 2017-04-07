var Twit = require('twit');
var qs = require('querystring');
const request = require('request');
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const async = require('async');

var personality_insights = new PersonalityInsightsV3({
  username: 'e90e128b-df6d-41fa-83e1-c82e10b73bd1',
  password: 'kx7881VDdMil',
  version_date: '2016-10-19'
});

// const oauth = require('./twitter_config');

var T = new Twit({
  consumer_key: 'dqsUU1y32uaiobihrqyt7y7CX',
  consumer_secret: 'RDwumSVu91MwWf8UoX63EMopYkLoEClkFM8VcKOjSjDdlVu4Jz',
  access_token: '51545787-SFX5dF0MawW8lc0DTGTOYm6kUoo3HgbTFiGjn0wbv',
  access_token_secret: 'ZYyXFhLQqjpDn3y3qC1GlRaKpMnbMo0D9yW2tzpK8HeEs',
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


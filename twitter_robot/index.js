console.log("The robot is starting");

const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
const params = {
  q: 'tongyang',
  count: 20
};
T.get('search/tweets', params, gotData);
function gotData(err, data, response) {
  let tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text)
  }
};
// T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data)
// });

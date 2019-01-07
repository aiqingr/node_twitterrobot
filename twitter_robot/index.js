console.log("The robot is starting");

const Twit = require('twit');
const config = require('./config');
const T = new Twit(config);
// const params = {
//   q: 'tongyang',
//   count: 20
// };
// T.get('search/tweets', params, gotData);
// function gotData(err, data, response) {
//   let tweets = data.statuses;
//   for (let i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text)
//   }
// };
setInterval(tweetIt, 1000*20)
tweetIt();

function tweetIt() {
  let r = Math.floor(Math.random()*100);

  let tweets = {
    status: 'Here is a random number ' + r + ' #First posting for NodeJS'
  };

  T.post('statuses/update', tweets, tweeted);

  function tweeted(err, data, response) {
    if(err) {
      console.log(err);
      console.log('Something is going wrong.')
    } else {
      console.log("It's working fun.")
    }
  }
}

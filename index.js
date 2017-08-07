const Twitter = require('twitter');
const Feed = require('feed');
const twitterApiCredentials = require('./twitter-api-credentials.json');

exports.search = (req, res) => {
  const { id } = req.query;
  if (id) {
    const client = new Twitter(twitterApiCredentials);
    client.get('search/tweets', {q: `from:${id}`}).then(tweets => {
      const feed = new Feed({
        id: id,
        title: `${id}'s Tweets`,
      });
      tweets.statuses.forEach(tweet => feed.addItem({
        id: tweet.id,
        title: tweet.text,
        date: new Date(tweet.created_at),
        link: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id}`,
        author: [{
          name: tweet.user.name,
          link: `https://twitter.com/${tweet.user.screen_name}`,
        }],
      }));
      res.status(200).contentType('application/xml').send(feed.rss2());
    });
  } else {
    res.status(400).end();
  }
};

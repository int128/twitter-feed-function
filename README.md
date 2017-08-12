# Twitter Feed Function [![CircleCI](https://circleci.com/gh/int128/twitter-feed-function.svg?style=shield)](https://circleci.com/gh/int128/twitter-feed-function)

A Twitter Feed service on Google Cloud Functions. It provides following feed:

```xml
<rss version="2.0">
<channel>
<title>****'s Tweets</title>
<link/>
<description/>
<lastBuildDate>Mon, 10 Jul 2017 06:23:42 GMT</lastBuildDate>
<docs>http://blogs.law.harvard.edu/tech/rss</docs>
<generator>Feed for Node.js</generator>
<item>
<title>
<![CDATA[
****
]]>
</title>
<pubDate>Mon, 10 Jul 2017 06:13:30 GMT</pubDate>
</item>
...snip...
```

## How to deploy from Console

1. Create a function on Cloud Functions.
1. Create `index.js` and `package.json`.
1. Open https://your-project.cloudfunctions.net/twitter-feed-function?id=twitter-id

## How to deploy from Circle CI

1. Create a service account with Project Editor role on IAM.
1. Create a function on Cloud Functions.
1. Create a storage on Cloud Storage.
1. Add environment variables on Circle CI:
  - `GOOGLE_AUTH` - Base64 encoded string of the service account key.
  - `GOOGLE_PROJECT_ID` - Project name.
  - `TWITTER_API_CREDENTIALS_JSON` - Credentials for Twitter API, e.g. `{"consumer_key":"****","consumer_secret":"****","access_token_key":"****","access_token_secret":"****"}`.

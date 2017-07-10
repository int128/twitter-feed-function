# Twitter Feed Function

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

1. Create a function at Cloud Functions.
1. Create `index.js` and `package.json`.
1. Open https://your-project.cloudfunctions.net/twitter-feed-function?id=twitter-id

## How to deploy via Circle CI

1. Create a repository on Cloud Source Repositories.
1. Configure following environment variables on Circle CI.
  - `GCLOUD_PROJECT` - Project name.
  - `NETRC` - Credentials for Cloud Source Repository, e.g. `machine source.developers.google.com login **** password ****`.
  - `TWITTER_API_CREDENTIALS_JSON` - Credentials for Twitter API, e.g. `{"consumer_key":"****","consumer_secret":"****","access_token_key":"****","access_token_secret":"****"}`.
1. Configure relationship between GitHub and Circle CI.
1. Configure relationship between Cloud Source Repository and Cloud Function.

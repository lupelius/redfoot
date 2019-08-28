import React from "react";
let Parser = require("rss-parser");
let parser = new Parser();

export default class FetchDataFromRSSFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    };
  }

  FetchDataFromRssFeed() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const that = this;
    parser.parseURL(
      CORS_PROXY + "https://medium.com/feed/dev-channel",
      function(_err, feed) {
        that.setState({ feed: feed.items });
      }
    );
    /* (async () => {
      let feed = await parser.parseURL("https://medium.com/feed/dev-channel");
      feed.items.forEach(item => {
        this.setState({
          recentBlogPost: {
            name: item.title,
            url: item.link
          }
        });
      });
    })(); */
  }

  componentDidMount() {
    this.FetchDataFromRssFeed();
  }

  render() {
    return (
      <ul>
        {this.state.feed.map((item, i) => (
          <li key={i} style={{ textAlign: "left" }}>
            <a target="_blank" rel="noopener noreferrer" href={item.link}>
              <h2>{item.title}</h2>
            </a>
            {/* <div
              dangerouslySetInnerHTML={{ __html: item["content:encoded"] }} LambdaWriteCloudWatchWriteDynamoDB 
            /> */}
          </li>
        ))}
      </ul>
    );
  }
}

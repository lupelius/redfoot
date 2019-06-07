import React from "react";
let Parser = require("rss-parser");
let parser = new Parser();

export default class FetchDataFromRSSFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      recentBlogPost: {
        name: "",
        url: ""
      }
    };
  }

  FetchDataFromRssFeed() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    const that = this;
    parser.parseURL(
      CORS_PROXY + "https://medium.com/feed/dev-channel",
      function(_err, feed) {
        feed.items.forEach(function(entry) {
          that.setState({
            recentBlogPost: {
              name: entry.title,
              url: entry.link
            }
          });
        });
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
    {
      this.FetchDataFromRssFeed();
    }
  }

  render() {
    return (
      <div>
        Check out our blog:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={this.state.recentBlogPost.url}
        >
          {this.state.recentBlogPost.name}
        </a>
      </div>
    );
  }
}
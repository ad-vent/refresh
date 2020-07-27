import React from 'react';

import Parser from '../Parser.js';
import FeedEntry from './FeedEntry.jsx';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      pageNumber: 2,
      pageLimit: 6
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    Parser.getHomeFeed(1, 6, (data) => {
      this.setState({
        entries: data
      });
    });

    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      Parser.getHomeFeed(this.state.pageNumber, this.state.pageLimit, (data) => {
        console.log(data);
        this.setState({
          pageNumber: this.state.pageNumber + 1,
          entries: [...this.state.entries, ...data]
        });
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.entries.map((entry) => (
          <FeedEntry entry={entry} key={entry.recipe_id} />
        ))}
      </div>
    );
  }
}

export default Feed;
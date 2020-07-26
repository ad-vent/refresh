import React from 'react';

import FeedEntry from './FeedEntry.jsx';

export default class Feed extends React.Component {
  constructor(props) {
    super(props)l

    this.state = {
      entries: [],
      pageNumber: 3,
      pageLimit: 10
    }
  }

  componentDidMount() {
    Parser.getHomeFeed(1, 20, (data) => {
      this.setState({
        entries: [...data]
      });
    });
  }

  render() {
    { entries } = this.state;
    return(
      {entries.map((entry) => (
        <FeedEntry entry={entry} key={entry.recipe_id} />
      ))}
    );
  }
}
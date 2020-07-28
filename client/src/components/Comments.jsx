import React from 'react';

import styles from '../styles/comments.css';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeProfileView(this.props.comment.username);
  }

  render() {
    return (
      <div className={styles.commentContainer}>
        <span className={styles.commentName} onClick={this.handleClick}>{this.props.comment.username}</span><span className={styles.commentText}> {this.props.comment.text}</span>
      </div>
    );
  }
}

export default Comments;
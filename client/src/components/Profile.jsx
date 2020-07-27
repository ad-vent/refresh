import React from 'react';

import styles from '../styles/profile.css';
import Parser from '../Parser.js';
import ProfileEntry from './ProfileEntry.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      userImg: '',
      likes: 0,
      followers: 0,
      following: 0,
      entries: [],
      pageNumber: 2,
      pageLimit: 6
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    Parser.getUserFeed(this.props.username, 1, 6, (data) => {
      this.setState({
        entries: data,
        username: data[0].username,
        userImg: data[0].user_image,
        followers: data[0].followers,
        following: data[0].following
      });
    });


    Parser.getTotalLikes(this.props.username, (data) => {
      this.setState({
        likes: data[0].total_likes
      });
    });

    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      Parser.getUserFeed(this.state.username, this.state.pageNumber, this.state.pageLimit, (data) => {
        this.setState({
          pageNumber: this.state.pageNumber + 1,
          entries: [...this.state.entries, ...data]
        });
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <img src={this.state.userImg} className={styles.userImg}></img>
        <div className={styles.userName}>{this.state.username}</div>
        <table className={styles.statusContainer}>
          <tbody>
            <tr>
              <td className={styles.statusCell}><span className={styles.statusTitle2}>Likes: </span><span className={styles.status}>{this.state.likes}</span></td>
              <td className={styles.statusCell}><span className={styles.statusTitle}>Followers: </span><span className={styles.status}>{this.state.followers}</span></td>
              <td className={styles.statusCell}><span className={styles.statusTitle}>Following: </span><span className={styles.status}>{this.state.following}</span></td>
            </tr>
          </tbody>
        </table>
        <div>
        {this.state.entries.map((entry) => (
          <ProfileEntry entry={entry} key={entry.recipe_id} />
        ))}
      </div>
      </div>
    );
  }
}

export default Profile;
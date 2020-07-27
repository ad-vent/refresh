import React from 'react';

import styles from '../styles/profile.css';
import Parser from '../Parser.js';
import ProfileEntry from './ProfileEntry.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: 'Adrian Ventura',
      likes: 37852,
      followers: 753,
      following: 1,
      entries: [],
      pageNumber: 2,
      pageLimit: 6
    }

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
      <div className={styles.container}>
        <div className={styles.userName}>{this.state.full_name}</div>
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
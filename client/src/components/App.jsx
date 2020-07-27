import React from 'react';

import styles from '../styles/app.css';
import Feed from './Feed.jsx';
import Profile from './Profile.jsx';
import Notifications from './Notifications.jsx';
import Messages from './Messages.jsx';
import Lists from './Lists.jsx';
import Settings from './Settings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Feed',
      full_name: 'Adrian Ventura',
      user_image: 'https://ca.slack-edge.com/T0130S7DBUJ-U013A7QRL93-76ea3b6a9b14-512'
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === 'Feed') {
      return <Feed />
    }
    if (view === 'Profile') {
      return <Profile />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <img src={this.state.user_image} className={styles.userImg} onClick={() => {this.changeView('Profile')}}></img>
          <input type="text" className={styles.search} placeholder="   search"></input>
          <table>
            <tbody>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeView('Feed')}}>Home</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeView('Notifications')}}>Notifications</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeView('Messages')}}>Messages</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeView('Lists')}}>Lists</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeView('Settings')}}>Settings</td>
              </tr>
            </tbody>
          </table>
          <button className={styles.addBtn}>Add Entry</button>
        </div>
        <div className={styles.main}>
          {this.renderView()}
        </div>
      </div>
    )
  };
}

export default App;
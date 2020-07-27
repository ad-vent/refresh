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
      username: 'Adrian'
    }

    this.changeView = this.changeView.bind(this);
    this.changeProfileView = this.changeProfileView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  changeProfileView(user) {
    this.setState({
      view: 'Profile',
      username: user
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === 'Feed') {
      return <Feed changeProfileView={this.changeProfileView}/>
    }
    if (view === 'Profile') {
      return <Profile username={this.state.username} />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <input type="text" className={styles.search} placeholder="  search"></input>
          <table>
            <tbody>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeView('Feed')}}>Home</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn} onClick={() => {this.changeProfileView('Adrian')}}>Profile</td>
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
import React from 'react';

import styles from '../styles/app.css';
import Feed from './Feed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Feed',
      full_name: 'Adrian Ventura',
      user_image: 'https://ca.slack-edge.com/T0130S7DBUJ-U013A7QRL93-76ea3b6a9b14-512'
    }
  }

  renderView() {
    const { view } = this.state;

    if (view === 'Feed') {
      return <Feed />
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <img src={this.state.user_image} className={styles.userImg}></img>
          <input type="text" className={styles.search} placeholder="   search"></input>
          <table>
            <tbody>
              <tr className={styles.navRow}>
                <td className={styles.navBtn}>Home</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn}>Notifications</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn}>Messages</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn}>Lists</td>
              </tr>
              <tr className={styles.navRow}>
                <td className={styles.navBtn}>Settings</td>
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
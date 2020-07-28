import React from 'react';
import Modal from 'react-modal';

import styles from '../styles/app.css';
import modalStyle from '../styles/modalEntry.css';
import Feed from './Feed.jsx';
import Profile from './Profile.jsx';
import Notifications from './Notifications.jsx';
import Messages from './Messages.jsx';
import Lists from './Lists.jsx';
import Settings from './Settings.jsx';
import AddEntry from './AddEntry.jsx';
import UnderConstruction from './UnderConstruction.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'Feed',
      username: '',
      modal: false
    }

    this.changeView = this.changeView.bind(this);
    this.changeProfileView = this.changeProfileView.bind(this);
    this.hideAddEntry = this.hideAddEntry.bind(this);
    this.showAddEntry = this.showAddEntry.bind(this);
    this.disableScroll = this.disableScroll.bind(this);
    this.enableScroll = this.enableScroll.bind(this);
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

  showAddEntry() {
    this.setState({
      modal: true
    });
  }

  hideAddEntry() {
    this.setState({
      modal: false
    });
  }

  disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  enableScroll() {
    document.body.style.overflow = 'scroll';
  }

  renderView() {
    const { view } = this.state;

    if (view === 'Feed') {
      return <Feed changeProfileView={this.changeProfileView}/>
    } else if (view === 'Profile') {
      return <Profile changeProfileView={this.changeProfileView} username={this.state.username} />
    } else {
      return <UnderConstruction />
    }
  }

  render() {
    return (
      <div className={styles.container}>

        <Modal
          className={modalStyle.modalEntry}
          closeTimeoutMS={50}
          isOpen={this.state.modal}
          onRequestClose={this.hideAddEntry}
          onAfterOpen={this.disableScroll}
          onAfterClose={this.enableScroll}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(18, 16, 10, 0.5)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#FCFCFC',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '10px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >
          <AddEntry hideModal={this.hideAddEntry} />
        </Modal>

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
          <button className={styles.addBtn} onClick={this.showAddEntry}>Add Entry</button>
        </div>
        <div className={styles.main}>
          {this.renderView()}
        </div>
      </div>
    )
  };
}

export default App;
import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

import styles from '../styles/feedEntry.css';
import modalStyle from '../styles/modalEntry.css';
import ModalEntry from './ModalEntry.jsx';

Modal.setAppElement('#app');

class FeedEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }

    this.hideEntry = this.hideEntry.bind(this);
    this.showEntry = this.showEntry.bind(this);
    this.disableScroll = this.disableScroll.bind(this);
    this.enableScroll = this.enableScroll.bind(this);
  }

  showEntry() {
    this.setState({
      modal: true
    });
  }

  hideEntry() {
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

  render() {
    return (
      <div>
        <Modal
          className={modalStyle.modalEntry}
          closeTimeoutMS={50}
          isOpen={this.state.modal}
          onRequestClose={this.hideEntry}
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
          <ModalEntry entry={this.props} hideModal={this.hideEntry} />
        </Modal>
        <div className={styles.container} >
          {/* USER IMAGE */}
          <img src={this.props.entry.user_image} className={styles.userImg}></img>
          {/* USER NAME */}
          <div className={styles.userName}>{this.props.entry.full_name}</div>
          {/* RECIPE TITLE */}
          <div className={styles.title} onClick={this.showEntry}>{this.props.entry.recipe.title}</div>
          {/* RECIPE PHOTO */}
          <img src={this.props.entry.recipe.image} className={styles.entryImg} onClick={this.showEntry}></img>
          {/* LIKES */}
          <div className={styles.likes}><span className={styles.heart}>♡</span> {this.props.entry.recipe.likes}</div>
          {/* COMMENTS */}
          <div className={styles.commentContainer}>
            <div>
              <span className={styles.commentName}>{this.props.entry.recipe.comments[0].full_name}</span><span className={styles.commentText}> {this.props.entry.recipe.comments[0].text}</span>
            </div>
            <div>
              <span className={styles.commentName}>{this.props.entry.recipe.comments[1].full_name}</span><span className={styles.commentText}> {this.props.entry.recipe.comments[1].text}</span>
            </div>
            <div>
              <span className={styles.commentName}>{this.props.entry.recipe.comments[2].full_name}</span><span className={styles.commentText}> {this.props.entry.recipe.comments[2].text}</span>
            </div>
          </div>
          {/* POST COMMENT */}
          <input type="text" className={styles.inputComment} placeholder="  comment..."></input><button type="submit" className={styles.postBtn}>Post</button>
          {/* DATE UPLOADED */}
          <div className={styles.date}>{moment(this.props.entry.recipe.date).fromNow()}</div>
        </div>
      </div>
    );
  }
}

export default FeedEntry;
import React from 'react';
import moment from 'moment';

import styles from '../styles/FeedEntry.css';

const FeedEntry = (props) => (
  <div className={styles.container}>
    <img src={props.entry.user_image} className={styles.userImg}></img>
    <div className={styles.userName}>{props.entry.full_name}</div>
    <div className={styles.title}>{props.entry.recipe.title}</div>
    <img src={props.entry.recipe.image} className={styles.entryImg}></img>
    <div className={styles.likes}><span className={styles.heart}>♡</span> {props.entry.recipe.likes}</div>
    <input type="text" className={styles.inputComment} placeholder="   comment..."></input><button type="submit" className={styles.postBtn}>Post</button>
    <div className={styles.date}>{moment(props.entry.recipe.date).fromNow()}</div>
  </div>
)

export default FeedEntry;
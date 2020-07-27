import React from 'react';
import moment from 'moment';

import ModalEntryIngredients from './ModalEntryIngredients.jsx';
import styles from '../styles/ModalEntry.css';

class ModalEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.hideModal();
  }

  render() {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.ingredientsContainer}>
          <button type="button" className={styles.exitBtn} onClick={this.handleClick}>Exit</button>
          <div className={styles.ingredientsTitle}>
            Ingredients:
          </div>
          <div>
            {this.props.entry.entry.recipe.ingredients.map((ingredient) => (
              <ModalEntryIngredients ingredient={ingredient} />
            ))}
          </div>
        </div>
        <div className={styles.anothaContainer}>
          {/* RECIPE PHOTO */}
          <img src={this.props.entry.entry.recipe.image} className={styles.entryImg}></img>
          {/* RECIPE TITLE */}
          <div className={styles.title}>{this.props.entry.entry.recipe.title}</div>
          {/* DATE UPLOADED */}
          <div className={styles.date}>{moment(this.props.entry.entry.recipe.date).fromNow()}</div>
          {/* RECIPE DESCRIPTION */}
          <div className={styles.description}>{this.props.entry.entry.recipe.description}</div>
        </div>
      </div>
    )
  }
}

export default ModalEntry;

import React from 'react';

import styles from '../styles/modalEntry.css';

const ModalEntryIngredients = (props) => (
  <div>
    <ul>
      <li className={styles.ingredientList}>{props.ingredient}</li>
    </ul>
  </div>
)

export default ModalEntryIngredients;
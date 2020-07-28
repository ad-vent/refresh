import React from 'react';

import styles from '../styles/addEntry.css';
import Parser from '../Parser.js';

class AddEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      title: '',
      description: '',
      ingredients: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.props.hideModal();
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    Parser.postData({
      username: 'Adrian',
      user_image: 'https://ca.slack-edge.com/T0130S7DBUJ-U013A7QRL93-76ea3b6a9b14-512',
      followers: 8356,
      following: 1,
      recipe: {
        title: this.state.title,
        image: this.state.image,
        description: this.state.description,
        ingredients: this.state.ingredients.split(','),
        date: Date.now(),
        likes: 0
      }

    });
  }


  render() {
    return (
      <div>
        <div className={styles.container}>
          <button type="button" className={styles.exitBtn} onClick={this.handleClick}>Exit</button>

          <div className={styles.title}>Add Entry</div>
          <div>
            <input type="text" name="title" className={styles.titleInput} value={this.state.title} placeholder=" title" onChange={this.handleChange}></input>
          </div>
          <div>
            <textarea cols="50" rows="10" name="ingredients" className={styles.ingredientsInput} value={this.state.ingredients} placeholder=" ingredients (comma seperated)" onChange={this.handleChange}></textarea>
          </div>
          <div>
            <textarea cols="50" rows="20" name="description" className={styles.descriptionInput} value={this.state.description} placeholder=" description" onChange={this.handleChange}></textarea>
          </div>

        </div>
        <div className={styles.imgContainer}>
        <button className={styles.submitBtn} onClick={this.handleSubmit}>Submit</button>
          <div>
            <input type="text" name="image" className={styles.image} value={this.state.image} placeholder=" image url" onChange={this.handleChange}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEntry;
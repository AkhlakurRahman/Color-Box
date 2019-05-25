import React, { Component } from 'react';

import classes from './Box.module.css';
import { choice } from '../utils/helpers';

export default class Box extends Component {
  state = {
    color: choice(this.props.colors)
  };

  pickAColor = () => {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);
    console.log(newColor);
    this.setState({ color: newColor });
  };

  handleClick = () => {
    this.pickAColor();
  };

  render() {
    return (
      <div
        className={classes.Box}
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      />
    );
  }
}

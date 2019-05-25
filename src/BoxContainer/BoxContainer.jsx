import React, { Component } from 'react';

import Box from '../Box/Box';
import classes from './BoxContainer.module.css';

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    colors: [
      'purple',
      'magenta',
      'violet',
      'pink',
      'limegreen',
      'crimson',
      'salmon',
      'tomato',
      'coral',
      'aqua',
      'khaki',
      'orchid'
    ]
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map((box, i) => (
      <Box key={i} colors={this.props.colors} />
    ));
    return <div className={classes.BoxContainer}>{boxes}</div>;
  }
}

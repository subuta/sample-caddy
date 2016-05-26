import React, { PropTypes, Component } from 'react';

import style from './style.js';
import { registerStyles } from 'src/utils/generateStyle.js';

const classes = registerStyles(style);
export default class Top extends Component {
  render() {
    return (
      <div className={classes.Top}>
        <h3>Hello React / Redux / jspm / Caddy</h3>
      </div>
    );
  }
}

import React, { PropTypes, Component } from 'react';

import contain from './contain.js';
import style from './style.js';
import { registerStyles } from 'src/utils/generateStyle.js';
import _ from 'lodash';

const classes = registerStyles(style);
class Top extends Component {
  static propTypes = {
    hoge: PropTypes.string
  };

  render() {
    return (
      <div className={classes.Top}>
        <input type="text" value="ls"/><span className={classes.Cursor}>|</span>
        <button onClick={this._handleCommand.bind(this)}>click!</button>
      </div>
    );
  }

  _handleCommand() {
    const { hitCommand } = this.props;
    hitCommand('ls');
  }
}

export default contain(Top);

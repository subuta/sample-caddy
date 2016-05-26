import React, { PropTypes, Component } from 'react';

import contain from './contain.js';
import style from './style.js';
import { registerStyles } from 'src/utils/generateStyle.js';
import _ from 'lodash';
import keycode from 'keycode';

const classes = registerStyles(style);
class Top extends Component {
  static propTypes = {
    hoge: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      focused: false
    };
  }

  render() {
    return (
      <div className={classes.Top}>
        $ <input className={classes.Input}
                 type="text"
                 onKeyPress={this._onKeyPress.bind(this)}
                 onFocus={this._onFocus.bind(this)}
                 onBlur={this._onBlur.bind(this)}
                 defaultValue="ls"/>
        {this._renderResult()}
        {this._renderCursor()}
      </div>
    );
  }

  _renderResult() {
    const { lastCommand } = this.props;
    if (lastCommand === 'ls') {
      return (
        <div>
          <div>jspm</div>
          <div>react</div>
          <div>redux</div>
          <div>caddy</div>
        </div>
      );
    } else {
      return (
        <div></div>
      )
    }
  }

  _renderCursor() {
    if (!this.state.focused) {
      return <span className={classes.Cursor}>|</span>
    }
  }

  _onKeyPress(e) {
    const key = keycode(e);
    if (key === 'enter') {
      const { hitCommand } = this.props;
      hitCommand(e.target.value);
    }
    return true;
  }

  _onFocus() {
    this.setState({
      focused: true
    })
  }

  _onBlur() {
    this.setState({
      focused: false
    })
  }
}

export default contain(Top);

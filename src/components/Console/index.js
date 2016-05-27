import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import contain from './contain.js';
import style from './style.js';
import { registerStyles } from 'src/utils/generateStyle.js';
import _ from 'lodash';
import keycode from 'keycode';

const classes = registerStyles(style);
class Top extends Component {
  static propTypes = {
    hitCommand: PropTypes.func.isRequired,
    enterCommand: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
    lastCommand: PropTypes.string,
    enteredCommand: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      focused: false
    };
  }

  render() {
    let command = this.props.lastCommand;

    // keep blank value.
    if (_.isEmpty(command)) {
      command = '';
    }

    return (
      <div className={classes.Top}>
        $ {this._renderCursor()}
        <input className={classes.Input}
                 type="text"
                 onKeyDown={this._onKeyDown.bind(this)}
                 onChange={this._onChange.bind(this)}
                 onFocus={this._onFocus.bind(this)}
                 onBlur={this._onBlur.bind(this)}
                 value={command}/>
        {this._renderResult()}
        <Link to="credit">credit→</Link>
      </div>
    );
  }

  _renderResult() {
    const { enteredCommand } = this.props;
    if (enteredCommand === 'ls') {
      return (
        <div>
          <div>many thanks to ...</div>
          <div>jspm</div>
          <div>react</div>
          <div>redux</div>
          <div>caddy</div>
        </div>
      );
    } else {
      return (
        <div className={classes.Hint}>
          please input `ls` command and press `enter` key...<br/>
          and you can also undo(↑) / redo(↓) commands.
        </div>
      )
    }
  }

  _renderCursor() {
    if (!this.state.focused) {
      return <span className={classes.Cursor}>|</span>
    }
  }

  _onChange(e) {
    const { hitCommand } = this.props;
    hitCommand(e.target.value);
  }

  _onKeyDown(e) {
    const { enterCommand, hitCommand,
            undo, redo } = this.props;
    const key = keycode(e);
    if (key === 'enter') {
      hitCommand(e.target.value);
      enterCommand(e.target.value);
    } else if (key === 'up') {
      undo();
    } else if (key === 'down') {
      redo();
    } else {
      this._onChange(e);
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

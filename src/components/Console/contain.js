import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as consoleActions from 'src/actions/console.js';
import { ActionCreators as undoActions } from 'redux-undo';
import { getLastCommand, getEnteredCommand } from 'src/selectors/console.js';

const mapStateToProps = createSelector(
  getLastCommand,
  getEnteredCommand,
  (lastCommand, enteredCommand) => {
    return {
      lastCommand,
      enteredCommand
    };
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(consoleActions, dispatch),
    ...bindActionCreators(undoActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

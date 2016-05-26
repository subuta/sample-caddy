import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as consoleActions from 'src/actions/console.js';
import { getLastCommand } from 'src/selectors/console.js';

const mapStateToProps = createSelector(
  getLastCommand,
  (lastCommand) => {
    return {
      lastCommand
    };
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(consoleActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);

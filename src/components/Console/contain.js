import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as consoleActions from 'src/actions/console.js';
import { getStdout } from 'src/selectors/console.js';

const mapStateToProps = createSelector(
  getStdout,
  (stdout) => {
    console.log('stdout = ', stdout);
    return {
      stdout
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

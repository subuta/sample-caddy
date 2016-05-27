import {
  HIT_COMMAND,
  ENTER_COMMAND
} from 'src/constants/ActionTypes.js'

import i from 'icepick';

const initialState = {
  lastCommand: '',
  enteredCommand: ''
};

export default function components(state = initialState, action) {
  switch (action.type) {
    case HIT_COMMAND:
      return i.assign(state, {
        lastCommand: action.payload
      });
    case ENTER_COMMAND:
      return i.assign(state, {
        enteredCommand: action.payload
      });
    default:
      return state;
  }
}

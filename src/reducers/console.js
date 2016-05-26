import {
  HIT_COMMAND
} from 'src/constants/ActionTypes.js'

const initialState = {
  lastCommand: ''
};

export default function components(state = initialState, action) {
  switch (action.type) {
    case HIT_COMMAND:
      return {
        lastCommand: action.payload
      };
    default:
      return state;
  }
}

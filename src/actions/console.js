import {
  HIT_COMMAND,
  ENTER_COMMAND
} from 'src/constants/ActionTypes.js'

// set component to store
export const hitCommand = function(command) {
  return {
    type: HIT_COMMAND,
    payload: command
  }
};

export const enterCommand = function(command) {
  return {
    type: ENTER_COMMAND,
    payload: command
  }
};

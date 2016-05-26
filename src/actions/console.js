import {
  HIT_COMMAND,
} from 'src/constants/ActionTypes.js'

// set component to store
export const hitCommand = function(command) {
  return {
    type: HIT_COMMAND,
    payload: command
  }
};

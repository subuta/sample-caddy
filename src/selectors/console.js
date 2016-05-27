export const getLastCommand = (state, props) => {
  return state.console.present.lastCommand;
};

export const getEnteredCommand = (state, props) => {
  return state.console.present.enteredCommand;
};

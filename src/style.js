import {
  ACCENT_COLOR,
  BACKGROUND_COLOR
} from 'src/constants/styles.js';

import { registerRules } from 'src/utils/generateStyle.js';

export const Rules = {
  'body': {
    margin: 0,
    padding: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND_COLOR
  },

  a: {
    color: ACCENT_COLOR,
    opacity: 0.6,
    fontSize: 12
  }
};

registerRules(Rules);

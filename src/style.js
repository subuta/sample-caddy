import {
  BACKGROUND_COLOR
} from 'src/constants/styles.js';

import { registerRules } from 'src/utils/generateStyle.js';

export const Rules = {
  'body': {
    margin: 0,
    padding: 0,
    backgroundColor: BACKGROUND_COLOR
  }
};

registerRules(Rules);

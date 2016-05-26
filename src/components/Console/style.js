import { ACCENT_COLOR } from 'src/constants/styles.js';

import { registerKeyframe } from 'src/utils/generateStyle.js';

export const Top = {
  color: ACCENT_COLOR,
  height: 200,
  width: 300
};

const blink = {
  '0%': { opacity: 1 },
  '50%': { opacity: 0 },
  '100%': { opacity: 1 }
};

export const Cursor = {
  animation: `${registerKeyframe('blink', blink)} 0.7s infinite`,
  color: ACCENT_COLOR
};

export const Input = {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  width: 60,
  color: ACCENT_COLOR
};

export default {
  Top,
  Input,
  Cursor
}

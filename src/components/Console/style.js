import { ACCENT_COLOR } from 'src/constants/styles.js';

import { registerKeyframe } from 'src/utils/generateStyle.js';

export const Top = {
  color: ACCENT_COLOR
};

export const Cursor = {
  animation: 'blink 0.7s infinite',
  color: ACCENT_COLOR
};

// @keyframes blink{
//   0% { opacity:1; }
//   50% { opacity:0; }
//   100% { opacity:1; }
// }

export default {
  Top,
  Cursor
}

import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import freeStyle from 'free-style';
import i from 'icepick';
import _ from 'lodash';
import { paramCase } from 'change-case';

// Create a container instance.
const Style = freeStyle.create();
let classes = {};
let keyframes = {};

export const addChangeListener = fn => Style.addChangeListener(fn);
export const removeChangeListener = fn => Style.removeChangeListener(fn);

// allow call register with null value.
export const registerStyles = (styles = {}) => {
  _.each(styles, (style, key) => {
    registerStyle(key, style);
  });
  return classes;
};

export const registerStyle = (key, style) => {
  let plugins = [
    autoprefixer
  ];

  const postcss = postcssJs.sync(plugins);

  // apply postcss-js to style.
  const _style = postcss(i.merge({
    // dummy style for workaround this issue - https://github.com/postcss/postcss-js/issues/13
    fontSize: 'inherit'
  }, style));

  const className = paramCase('my-' + key);
  // inject style to free-style.
  const uniqueKey = Style.registerStyle({
    [`.${className}, &`]: _style
  });

  classes[key] = uniqueKey;
  return uniqueKey;
};

export const registerKeyframes = (_keyframes) => {
  _.each(_keyframes, (keyframe, key) => registerKeyframe(key, keyframe));
  return keyframes;
};

export const registerKeyframe = (key, keyframe) => {
  // inject keyframe to free-style.
  const uniqueKey = Style.registerKeyframes(keyframe);
  keyframes[key] = uniqueKey;
  return uniqueKey;
};

export const registerRules = (rules) => {
  _.each(rules, (rule, key) => registerRule(key, rule));
};

export const registerRule = (key, rule) => {
  // inject rule to free-style.
  Style.registerRule(key, rule);
};

export const getCSS = () => {
  return Style.getStyles();
};

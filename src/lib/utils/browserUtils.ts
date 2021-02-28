export const getUserAgent = () => {
  return window.navigator.userAgent;
};

export const isSafari = () => {
  return /\bsafari\b/i.test(getUserAgent());
};

export const isChrome = () => {
  return /\bchrome\b/i.test(getUserAgent());
};

export const isSafariOrChrome = () => {
  return /\b(safari|chrome)\b/i.test(getUserAgent());
};

export const isFirefox = () => {
  return /\b(firefox|gecko)\b/i.test(getUserAgent());
};

export const isOpera = () => {
  return /\bopera\b/i.test(getUserAgent());
};

export const isIE = () => {
  return /\bmsie\b/i.test(getUserAgent());
};

export const isOnLine = () => {
  return window.navigator.onLine;
};

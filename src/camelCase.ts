const camelCase: (val: string) => string = (val: string): string => {
  const { anyWhitespace, nonAlphaUnicode, oneOrMoreDigits } = require('./regex');
  
  return val
    .toLowerCase()
    .split(oneOrMoreDigits).join(' ')
    .replace(nonAlphaUnicode, ' ')
    .replace(anyWhitespace, (match, p1) => p1.toUpperCase().trimStart())
    .trim();
};

export default camelCase;

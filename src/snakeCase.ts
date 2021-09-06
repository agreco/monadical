const snakeCase: (val: string) => string = (val: string): string => {
  const { alphaUnicodeBetween, nonAlphaUnicodeStartOrEnd, nonAlphaUnicode, upperCase } = require('./regex');
  
  return val
    .trim()
    .replace(upperCase, (match, offset) => `${ offset > 0 ? '_' : '' }${ match.toLowerCase() }`)
    .replace(nonAlphaUnicode, '_')
    .replace(alphaUnicodeBetween, (match, p1) => `_${ p1 }_`)
    .replace(nonAlphaUnicodeStartOrEnd, (match, p1, p2, offset) => {
      return `${ offset > 0 ? `_${ match }` : `${ match }_` }`;
    })
    .replace(/(\s_)/g, (match, p1) => p1.trimStart())
    .toLowerCase();
};

export default snakeCase;

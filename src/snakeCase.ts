import { alphaUnicodeBetween, nonAlphaUnicodeStartOrEnd, nonAlphaUnicode, upperCase } from './regex';

const snakeCase: (val: string) => string = (val: string): string =>
  val
    .trim()
    .replace(upperCase, (match, offset) => `${offset > 0 ? '_' : ''}${match.toLowerCase()}`)
    .replace(nonAlphaUnicode, '_')
    .replace(alphaUnicodeBetween, (match, p1) => `_${p1}_`)
    .replace(nonAlphaUnicodeStartOrEnd, (match, p1, p2, offset) => {
      return `${offset > 0 ? `_${match}` : `${match}_`}`;
    })
    .replace(/(\s_)/g, (match, p1) => p1.trimStart())
    .toLowerCase();

export default snakeCase;

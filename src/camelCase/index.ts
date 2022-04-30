import { anyWhitespace, nonAlphaUnicode, oneOrMoreDigits } from '../regex';

const camelCase: (val: string) => string = (val: string): string =>
  val
    .toLowerCase()
    .split(oneOrMoreDigits)
    .join(' ')
    .replace(nonAlphaUnicode, ' ')
    .replace(anyWhitespace, (_, p1) => p1.toUpperCase().trimStart())
    .trim();

export default camelCase;

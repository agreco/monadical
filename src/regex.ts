
export const upperCase = /[A-Z]/g;
export const anyWhitespace = /(\s.)/g;
export const nonAlphaUnicode = /[^a-z0-9\p{L}]+/gu;
export const alphaUnicodeBetween = /(?<=[\d\W]+)([a-z\p{L}]+)(?=[\d\W]+)/gu;
export const nonAlphaUnicodeStartOrEnd = /(?<=[\d\W]+)([a-z\p{L}]+)|([a-z\p{L}]+)(?=[\d\W]+)/gu;
export const oneOrMoreDigits = /(\d+)/;

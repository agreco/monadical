const camelCase: (val: string) => string = (val: string): string =>
  val
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\p{L}]+/gu, ' ')
    .replace(/(\s.)/g, (match, p1) => p1.toUpperCase().trimStart());

export default camelCase;

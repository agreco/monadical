const snakeCase: (val: string) => string = (val: string): string =>
  val
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\p{L}]+/gu, '_')
    .replace(/(\s_)/g, (match, p1) => p1.trimStart());

export default snakeCase;

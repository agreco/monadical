const snakeCase: (val: string) => string = (val: string): string =>
  val
    .trim()
    .replace(/[A-Z]/g, (match, offset) => `${offset > 0 ? '_' : ''}${match.toLowerCase()}`)
    .replace(/[^a-z0-9\p{L}]+/gu, '_')
    .replace(/(\s_)/g, (match, p1) => p1.trimStart())
    .toLowerCase();

export default snakeCase;

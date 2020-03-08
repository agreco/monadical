import writeVal from '../src/writeVal';

describe('writeVal', () => {
  test('writeVal of type string', () => {
    const obj: { [key: string]: number | string } = { x: Math.PI };
    writeVal<{ [key: string]: number | string }, string>(obj, 'x', '3.141592653589793')();
    expect(obj.x).toBe('3.141592653589793');
  });

  test('writeVal of an additional number type', () => {
    const obj: { [key: string]: number } = { x: Math.PI };
    writeVal<{ [key: string]: number }, number>(obj, 'x', Math.E)();
    expect(obj.x).toBe(2.718281828459045);
  });

  test('writeVal of an undefined key', () => {
    const obj: { [key: string]: number } = { x: Math.PI };
    writeVal<{ [key: string]: number }, number>(obj, 'y', Math.E)();
    expect(obj.y).toBe(2.718281828459045);
  });

  test('writeVal of an empty object', () => {
    const obj: { [key: string]: number } = {};
    writeVal<{ [key: string]: number }, number>(obj, 'y', Math.E)();
    expect(obj.y).toBe(2.718281828459045);
  });
});

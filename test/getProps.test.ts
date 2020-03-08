import getProps from '../src/getProps';
import isEmpty from '../src/isEmpty';

describe('getProps', () => {
  test('getProps from an object', () => {
    const obj: { [key: string]: number } = { x: Math.PI, y: Math.E, z: Math.LN2 };
    const [x, y] = getProps(['x', 'y'], obj);
    expect(x).toBe(3.141592653589793);
    expect(y).toBe(2.718281828459045);

    const [z] = getProps(['z'], obj);
    expect(z).toBe(0.6931471805599453);
  });

  test('getProps of a missing key', () => {
    const obj: { [key: string]: number } = { x: Math.PI, y: Math.E, z: Math.LN2 };
    expect(isEmpty(getProps(['f'], obj))).toBe(true);
  });

  test('getProps of a empty object key', () => {
    const obj: { [key: string]: number } = {};
    expect(isEmpty(getProps(['x'], obj))).toBe(true);
  });
});

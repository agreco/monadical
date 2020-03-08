import readVal from '../src/readVal';

describe('readVal', () => {
  test('readVal of type number', () => {
    expect(readVal({ pi: Math.PI }, 'pi')()).toBe(3.141592653589793);
  });

  test('readVal of type string', () => {
    expect(readVal({ pi: '3.141592653589793' }, 'pi')()).toBe('3.141592653589793');
  });

  test('readVal of undefined', () => {
    expect(readVal({ pi: '3.141592653589793' }, 'zeta')()).toBe(undefined);
  });

  test('readVal of an empty object', () => {
    expect(readVal({}, 'zeta')()).toBe(undefined);
  });
});

import seq from '../src/seq';

test('sequence a number', () => {
  let val: number = 10;
  let message: string = '';

  seq(
    (x: number) => (val += x),
    (x: number, name: string) => (message += `Hello, ${name}, your value is ${x * x}`)
  )(10, 'Antonio');

  expect(val).toBe(20);
  expect(message).toBe('Hello, Antonio, your value is 100');
});

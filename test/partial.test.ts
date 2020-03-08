import partial from '../src/partial';
import isFunction from '../src/isFunction';

test('partially apply a function with 1 arg', () => {
  const sayHi: (name: string) => string = (name: any) => {
    return `Hi ${name}`;
  };

  const func: () => string = partial(sayHi, 'Antonio');
  expect(isFunction(func)).toBe(true);
  expect(func()).toBe('Hi Antonio');
});

test('partially apply a function with 2 args', () => {
  const sayHi: (name: string, greeting: string) => string = (name: string, greeting: string) => {
    return `Hi ${name}, ${greeting}`;
  };

  const x: (greeting: string) => string = partial(sayHi, 'Antonio');
  expect(isFunction(x)).toBe(true);

  expect(x('pleased to meet you.')).toBe('Hi Antonio, pleased to meet you.');
});

test('partially apply a function with n args', () => {
  const sayHi: (name: string, greeting: string, question: string, conclusion: string) => string = (
    name: string,
    greeting: string,
    question: string,
    conclusion: string
  ) => {
    return `Hi ${name}, ${greeting}. ${question}? ${conclusion}`;
  };

  const x: (question: string, conclusion: string) => string = partial(sayHi, 'Antonio', 'pleased to meet you');

  expect(isFunction(x)).toBe(true);

  expect(x("How's it hanging", 'Keeping it real!')).toBe(
    "Hi Antonio, pleased to meet you. How's it hanging? Keeping it real!"
  );
});

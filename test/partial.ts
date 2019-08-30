
import test from 'ava';
import partial from '../src/partial';
import isFunction from '../src/isFunction';

test('partially apply a function with 1 arg', t => {
  
  const sayHi: (name: string) => string = (name: any) => {
    return `Hi ${name}`;
  };

  const func: () => string = partial(sayHi, 'Antonio');
  t.is(isFunction(func), true);
  t.is(func(), 'Hi Antonio');
});

test('partially apply a function with 2 args', t => {
  
  const sayHi: (name: string, greeting: string) => string = (name: string, greeting: string) => {
    return `Hi ${name}, ${greeting}`;
  };

  const x: (greeting: string) => string = partial(sayHi, 'Antonio');
  t.is(isFunction(x), true);

  t.is(x('pleased to meet you.'), 'Hi Antonio, pleased to meet you.');
});

test('partially apply a function with n args', t => {
  
  const sayHi: (name: string, greeting: string, question: string, conclusion: string) => string =
    (name: string, greeting: string, question: string, conclusion: string) => {
      return `Hi ${name}, ${greeting}. ${question}? ${conclusion}`;
    };

  const x: (question: string, conclusion: string) => string =
    partial(sayHi, 'Antonio', 'pleased to meet you');
  t.is(isFunction(x), true);

  t.is(
    x('How\'s it hanging', 'Keeping it real!'),
    'Hi Antonio, pleased to meet you. How\'s it hanging? Keeping it real!'
  );
});

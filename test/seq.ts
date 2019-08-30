
import test from 'ava';
import seq from '../src/seq';

test('sequence a number', t => {

  let val: number = 10;
  let message: string = '';

  seq(
    (x: number) => val += x,
    (x: number, name: string) => message += `Hello, ${ name }, your value is ${ x * x }`
  )(10, 'Antonio');
  
  t.is(val, 20);
  t.is(message, 'Hello, Antonio, your value is 100');
});

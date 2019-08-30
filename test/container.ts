
import test from 'ava';
import Container from '../src/container';
import identity from '../src/identity';

test('get value from a Container', t => {
  
  const x: Container<number> = Container.of(10);
  t.is(x.get(), 10);
});

test('map over value in a Container', t => {
  
  const w: Container<number> = Container.of(10);
  t.is(w.map(x => x * x).get(), 100);
  
  const x: Container<number> = Container.of(10);
  t.is(x.get(), 10);
  
  const y: Container<number> = x.map(x => x * x);
  t.is(y.get(), 100);
  
  const z: Container<string> = y.map(x => `${x}`);
  t.is(z.get(), '100');
});

test('retrieve a Container.of', t => {
  
  const x: Container<string> = Container.of('Monads Gonads');
  t.true(x instanceof Container);
  t.is(x.get(), 'Monads Gonads');
});

test('flatten Containers with a join', t => {
  
  const x: Container<Container<Container<string>>> = Container.of(Container.of(Container.of('Monads Gonads')));
  t.is(x.join().map(identity).get(), 'Monads Gonads');
});

test('string representation of Container and value', t => {
  
  const x = Container.of('Monads Gonads');
  t.is(x.toString(), 'Container[Monads Gonads]');
});

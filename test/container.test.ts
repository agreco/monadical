
import Container from '../src/container';
import identity from '../src/identity';

test('get value from a Container', () => {
  
  const x: Container<number> = Container.of(10);
  expect(x.get()).toBe(10);
});

test('map over value in a Container', () => {
  
  const w: Container<number> = Container.of(10);
  expect(w.map(x => x * x).get()).toBe(100);
  
  const x: Container<number> = Container.of(10);
  expect(x.get()).toBe(10);
  
  const y: Container<number> = x.map(x => x * x);
  expect(y.get()).toBe(100);
  
  const z: Container<string> = y.map(x => `${x}`);
  expect(z.get()).toBe('100');
});

test('retrieve a Container.of', () => {
  
  const x: Container<string> = Container.of('Monads Gonads');
  expect(x instanceof Container).toBe(true);
  expect(x.get()).toBe('Monads Gonads');
});

test('flatten Containers with a join', () => {
  
  const x: Container<Container<Container<string>>> = Container.of(Container.of(Container.of('Monads Gonads')));
  expect(x.join().map(identity).get()).toBe('Monads Gonads');
});

test('string representation of Container and value', () => {
  
  const x = Container.of('Monads Gonads');
  expect(x.toString()).toBe('Container[Monads Gonads]');
});

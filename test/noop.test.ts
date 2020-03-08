import noop from '../src/noop';

test('noop is noop', () => expect(noop()).toBe(void 0));

test('noop with argument is noop', () => expect(noop(10)).toBe(void 0));

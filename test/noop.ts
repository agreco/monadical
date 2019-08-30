
import test from "ava";
import noop from '../src/noop';

test('noop is noop', t => t.is(noop(), void 0));
test('noop with argument is noop', t => t.is(noop(10), void 0));

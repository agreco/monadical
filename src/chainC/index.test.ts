import chainC from '.';
import Maybe from '../maybe';
// import Either from '../either';

test('chain a Maybe Just', () => {
	expect(chainC(x => (x += 1), Maybe.just(10))).toBe(11);
});

test('chain a Maybe Nothing', () => {
	expect(chainC(x => (x += 1), Maybe.nothing(void 0)).value).toBe(void 0);
});

// test('chain a either left', () => {
// 	expect(chainc(x => (x += 1), either.left(10))).tobe(11);
// });

// test('chain a either right', () => {
// 	expect(chainc(x => (x += 1), either.right(void 0)).value).tobe(void 0);
// });

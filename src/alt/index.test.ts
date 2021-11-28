import alt from '.';

describe('alt', () => {
  test('left path', () =>
    expect(
      alt(
        (x: number) => (x += 1),
        x => (x -= 1)
      )(0)
    ).toBe(1));

  test('right path', () =>
    expect(
      alt(
        (x: number) => x,
        x => (x += 1)
      )(0)
    ).toBe(1));
});

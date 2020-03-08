import { validLength, joiner, trim, collapse } from '../src/utils';

describe('validLength', () => {
  test('validLength of string', () => {
    const str: string = 'abcdefghijklmnopqrstuvwxyz';
    expect(validLength(str, 26)).toBe(true);
  });

  test('validLength of string with incorrect length assertion', () => {
    const str: string = 'abcdefghijklmnopqrstuvwxyz';
    expect(validLength(str, 19)).toBe(false);
  });

  test('validLength of an empty string', () => {
    const str: string = '';
    expect(validLength(str, 26)).toBe(false);
  });
});

describe('joiner', () => {
  test('joiner to join an array of strings with dashes', () => {
    const arr: string[] = ['a', 'b', 'c', 'd', 'e'];
    const delim: string = '-';
    expect(joiner<string>(delim, arr)).toBe('a-b-c-d-e');
  });

  test('joiner to join an array of numbers with dashes', () => {
    const arr: number[] = [1, 2, 3];
    const delim: string = '-';
    expect(joiner<number>(delim, arr)).toBe('1-2-3');
  });

  test('joiner to join an array of numbers and string with commas', () => {
    const arr: (number | string)[] = [1, '1', 2, '2', 3, '3'];
    const delim: string = ',';
    expect(joiner<number | string>(delim, arr)).toBe('1,1,2,2,3,3');
  });

  test('joiner to join an empty array with semi-colon', () => {
    const arr: (number | string)[] = [];
    const delim: string = ';';
    expect(joiner<number | string>(delim, arr)).toBe('');
  });
});

describe('trim', () => {
  test('trim a string', () => {
    expect(trim('    a-b-c-d-e    ')).toBe('a-b-c-d-e');
  });

  test('trim a non-trimmable string', () => {
    expect(trim('a-b-c-d-e')).toBe('a-b-c-d-e');
  });

  test('trim an empty string', () => {
    expect(trim('')).toBe('');
  });
});

describe('collapse', () => {
  test('collapse a string delimited by dashes', () => {
    expect(collapse('-', 'a-b-c-d-e')).toBe('abcde');
  });

  test('collapse a string by incorrect delimiter', () => {
    expect(collapse(';', 'a-b-c-d-e')).toBe('a-b-c-d-e');
  });

  test('collapse an empty string', () => {
    expect(collapse('-', '')).toBe('');
  });
});

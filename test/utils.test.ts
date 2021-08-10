import { validLength, joiner, trim, collapse, camelCaseObjectKeys, snakeCaseObjectKeys } from '../src/utils';
import { IndexableAny } from '../src';

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

describe('camelCaseObjectKeys', () => {
  test.each([
    [{ 'abc def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc-def': 'foo' }, { abcDef: 'foo' }],
    [{ abc_def: 'foo' }, { abcDef: 'foo' }],
    [{ 'abc!def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc@def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc%def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc^def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc&def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc*def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc(def': 'foo' }, { abcDef: 'foo' }],
    [{ 'abc)def': 'foo' }, { abcDef: 'foo' }],
    [{ 'a品cd!e f': 'foo' }, { a品cdEF: 'foo' }],
    [{ 'ն !w**sss': 'foo' }, { նWSss: 'foo' }],
    [{ 0: 'foo' }, { 0: 'foo' }],
    [{ '0 a s w': 'foo' }, { '0ASW': 'foo' }],
    [{ '0 a 1 w': 'foo' }, { '0A1W': 'foo' }],
    [{ 1234: 'foo' }, { 1234: 'foo' }],
    [
      {
        'boo baz': ['a b', 'b c', 'c d', { 'do omer': 'a', 'bo om': ['a', 'b', { c: 'd', 'e()f': ['g'] }] }]
      },
      {
        booBaz: ['a b', 'b c', 'c d', { doOmer: 'a', boOm: ['a', 'b', { c: 'd', eF: ['g'] }] }]
      }
    ],
    [
      {
        'abc()def': 'foo',
        foo_bar: { 'boo baz': 'snaz faz' },
        'boo baz': ['a b', 'b c', 'c d', { 'do omer': 'a', 'bo om': ['a', 'b', { c: 'd', 'e()f': ['g'] }] }]
      },
      {
        abcDef: 'foo',
        fooBar: { booBaz: 'snaz faz' },
        booBaz: ['a b', 'b c', 'c d', { doOmer: 'a', boOm: ['a', 'b', { c: 'd', eF: ['g'] }] }]
      }
    ]
  ])('it maps the %s object keys entities', (val: IndexableAny, expectedVal) => {
    expect(camelCaseObjectKeys(val)).toMatchObject(expectedVal);
  });
});

describe('snakeCasing', () => {
  test.each([
    [{ abcDef: 'foo' }, { abc_def: 'foo' }],
    [{ AbcDef: 'foo' }, { abc_def: 'foo' }],
    [{ 'abc def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc-def': 'foo' }, { abc_def: 'foo' }],
    [{ abc_def: 'foo' }, { abc_def: 'foo' }],
    [{ 'abc!def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc@def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc%def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc^def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc&def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc*def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc(def': 'foo' }, { abc_def: 'foo' }],
    [{ 'abc)def': 'foo' }, { abc_def: 'foo' }],
    [{ 'a品cd!e f': 'foo' }, { a品cd_e_f: 'foo' }],
    [{ 'ն !w**sss': 'foo' }, { ն_w_sss: 'foo' }],
    [{ 0: 'foo' }, { 0: 'foo' }],
    [{ '0 a s w': 'foo' }, { '0_a_s_w': 'foo' }],
    [{ '0 a 1 w': 'foo' }, { '0_a_1_w': 'foo' }],
    [{ 1234: 'foo' }, { 1234: 'foo' }],
    [
      {
        'boo baz': ['a b', 'b c', 'c d', { 'do omer': 'a', 'bo om': ['a', 'b', { c: 'd', 'e()f': ['g'] }] }]
      },
      {
        boo_baz: ['a b', 'b c', 'c d', { do_omer: 'a', bo_om: ['a', 'b', { c: 'd', e_f: ['g'] }] }]
      }
    ],
    [
      {
        qrsTuv: 'foo',
        KlmNop: 'foo',
        'abc()def': 'foo',
        foo_bar: { 'boo baz': 'snaz faz' },
        'boo baz': ['a b', 'b c', 'c d', { 'do omer': 'a', 'bo om': ['a', 'b', { c: 'd', 'e()f': ['g'] }] }]
      },
      {
        qrs_tuv: 'foo',
        klm_nop: 'foo',
        abc_def: 'foo',
        foo_bar: { boo_baz: 'snaz faz' },
        boo_baz: ['a b', 'b c', 'c d', { do_omer: 'a', bo_om: ['a', 'b', { c: 'd', e_f: ['g'] }] }]
      }
    ]
  ])('it maps the %s object keys with snakeCase', (val: IndexableAny, expectedVal) => {
    expect(snakeCaseObjectKeys(val)).toMatchObject(expectedVal);
  });
});

import mapObjectKeys from '../src/mapObjectKeys';
import { IndexableAny } from '../src';
import camelCase from '../src/camelCase';

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
  expect(mapObjectKeys(val, camelCase)).toMatchObject(expectedVal);
});

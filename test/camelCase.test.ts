import camelCase from '../src/camelCase';

test.each([
  [ 'abc def', 'abcDef'],
  [ 'abc-def', 'abcDef'],
  [ 'abc_def', 'abcDef'],
  [ 'abc!def', 'abcDef'],
  [ 'abc@def', 'abcDef'],
  [ 'abc%def', 'abcDef'],
  [ 'abc^def', 'abcDef'],
  [ 'abc&def', 'abcDef'],
  [ 'abc*def', 'abcDef'],
  [ 'abc(def', 'abcDef'],
  [ 'abc)def', 'abcDef'],
  [ 'a品cd!e f', 'a品cdEF'],
  [ 'ն !w**sss', 'նWSss'],
  [ '0 a s w', '0ASW'],
  [ '0 a 1 w', '0A1W'],
])('it maps the %s object keys entities', (val, expectedVal) => {
  expect(camelCase(val)).toBe(expectedVal);
});

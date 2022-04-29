import camelCase from '../src/camelCase';

test.each([
  ['abc def', 'abcDef'],
  ['abc-def', 'abcDef'],
  ['abc_def', 'abcDef'],
  ['abc!def', 'abcDef'],
  ['abc@def', 'abcDef'],
  ['abc%def', 'abcDef'],
  ['abc^def', 'abcDef'],
  ['abc&def', 'abcDef'],
  ['abc*def', 'abcDef'],
  ['abc(def', 'abcDef'],
  ['abc)def', 'abcDef'],
  ['a品cd!e f', 'a品cdEF'],
  ['ն !w**sss', 'նWSss'],
  ['0 a s w', '0ASW'],
  ['0 a 1 w', '0A1W'],
  ['1abcd', '1Abcd'],
  ['11Abcd', '11Abcd'],
  ['abcd1', 'abcd1'],
  ['abcd11', 'abcd11'],
  ['1abcd1', '1Abcd1'],
  ['11abcd11', '11Abcd11'],
  ['111abcd111', '111Abcd111'],
  ['1abcd1efgh1', '1Abcd1Efgh1'],
  ['11abcd11efgh11', '11Abcd11Efgh11'],
  ['111abcd111efgh111', '111Abcd111Efgh111'],
  ['1abcd11efgh111ijkl', '1Abcd11Efgh111Ijkl']
])('it camel cases the %s string', (val, expectedVal) => {
  expect(camelCase(val)).toBe(expectedVal);
});

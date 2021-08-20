import snakeCase from '../src/snakeCase';

test.each([
  ['abcDef', 'abc_def'],
  ['AbcDef', 'abc_def'],
  ['abc def', 'abc_def'],
  ['abc-def', 'abc_def'],
  ['abc_def', 'abc_def'],
  ['abc!def', 'abc_def'],
  ['abc@def', 'abc_def'],
  ['abc%def', 'abc_def'],
  ['abc^def', 'abc_def'],
  ['abc&def', 'abc_def'],
  ['abc*def', 'abc_def'],
  ['abc(def', 'abc_def'],
  ['abc)def', 'abc_def'],
  ['a品cd!e f', 'a_品_cd_e_f'],
  ['ն !w**sss', 'ն_w_sss'],
  ['0 a s w', '0_a_s_w'],
  ['0 a 1    w', '0_a_1_w'],
  ['0 a     1    w', '0_a_1_w'],
  ['11', '11'],
  ['1abcd', '1_abcd'],
  ['11abcd', '11_abcd'],
  ['abcd1', 'abcd_1'],
  ['abcd11', 'abcd_11'],
  ['1abcd1', '1_abcd_1'],
  ['11abcd11', '11_abcd_11'],
  ['111abcd111', '111_abcd_111'],
  ['1abcd1efgh1', '1_abcd_1_efgh_1'],
  ['11abcd11efgh11', '11_abcd_11_efgh_11'],
  ['111abcd111efgh111', '111_abcd_111_efgh_111'],
  ['1abcd11efgh111ijkl', '1_abcd_11_efgh_111_ijkl']
])('it snake cases the %s value', (val, expectedVal) => {
  expect(snakeCase(val)).toBe(expectedVal);
});

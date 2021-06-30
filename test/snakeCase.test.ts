import snakeCase from '../src/snakeCase';

test.each([
  [ 'abc def', 'abc_def'],
  [ 'abc-def', 'abc_def'],
  [ 'abc_def', 'abc_def'],
  [ 'abc!def', 'abc_def'],
  [ 'abc@def', 'abc_def'],
  [ 'abc%def', 'abc_def'],
  [ 'abc^def', 'abc_def'],
  [ 'abc&def', 'abc_def'],
  [ 'abc*def', 'abc_def'],
  [ 'abc(def', 'abc_def'],
  [ 'abc)def', 'abc_def'],
  [ 'a品cd!e f', 'a品cd_e_f'],
  [ 'ն !w**sss', 'ն_w_sss'],
  [ '0 a s w', '0_a_s_w'],
  [ '0 a 1    w', '0_a_1_w'],
  [ '0 a     1    w', '0_a_1_w']
])('it maps the %s object keys entities', (val, expectedVal) => {
  expect(snakeCase(val)).toBe(expectedVal);
});

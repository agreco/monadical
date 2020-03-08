import { MapG, Monadical } from './index';
import curry from './curry';
import mapC from './mapC';

const mapG: MapG = curry(function*<T>(
  func: <V>(a: V) => any,
  container: Generator<any, T, any>
): Generator<any, Monadical<T>, any> {
  return mapC(func, yield container);
});

export default mapG;


import { MapC, MapG, Monadical } from './index';
import curry from './curry';
import mapC from './mapC';

const mapG: MapG =
  curry(<T>(func: <V>(a: V) => any, container: Generator<any, Monadical<T>, any>): MapC => {
    return mapC(func, container.next ? container.next().value : container);
  });

export default mapG;

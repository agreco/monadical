
import { MapC, Monadical } from './index';
import curry from './curry';

const mapC: MapC = curry(<T, V>(func: T, container: Monadical<V>) => container.map(func));

export default mapC;

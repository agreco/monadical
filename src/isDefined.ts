import curry from './curry';

const isDefined: (val: any) => boolean = curry((val: any): boolean => val !== undefined);

export default isDefined;

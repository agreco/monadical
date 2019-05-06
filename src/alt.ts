
const alt = <T, A>(funcA: (a: T) => A, funcB: (a: T) => A): (a: T) => A => (val: T) => funcA(val) || funcB(val);

export default alt;

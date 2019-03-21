
const alt = (funcA, funcB) => val => funcA(val) || funcB(val);

export default alt;


const curry = func => argA => argB => func(argA, argB);

export default curry;

import { Mappable } from './index';
import curry from './curry';
import getPropOrElse from './getPropOrElse';

const visualSideEffect: Mappable = curry(<T, V>(info: T, data: V): V => {
  const debugging = getPropOrElse('NODE_DEBUG', process.env, false);

  if (debugging) {
    console.log(`INFO: ${info}, DATA: ${JSON.stringify(data)}`);
  }

  return data;
});

export default visualSideEffect;

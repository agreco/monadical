import { GetProps, IndexableAny } from './index';
import curry from './curry';
import notNil from './notNil';

const getProps: GetProps = curry((propsArray: string[], obj: IndexableAny): any[] => {
  return propsArray.reduce((acc: any[], val: any) => {
    if (notNil(obj[val])) {
      acc.push(obj[val]);
    }
    return acc;
  }, []);
});

export default getProps;

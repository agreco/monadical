import { Collapse, Func1, FuncSpreadable, Joiner, ValidLength } from './';

import curry from './curry';
import mapObjectKeys, { MappableObject } from './mapObjectKeys';
import camelCase from './camelCase';
import snakeCase from './snakeCase';

export const validLength: ValidLength = curry((str: string, len: number) => str.length === len);

export const joiner: Joiner = curry(<T>(delim: string, arr: T[]): string => arr.join(delim));

export const trim: (a: string) => string = curry((str: string): string => str.trim());

export const collapse: Collapse = curry((delim: string, str: string): string =>
  str.replace(new RegExp('\\' + delim, 'g'), '')
);

export const camelCaseObjectKeys = (func: FuncSpreadable = camelCase): Func1<MappableObject> => mapObjectKeys(func);

export const snakeCaseObjectKeys = (func: FuncSpreadable = snakeCase): Func1<MappableObject> => mapObjectKeys(func);

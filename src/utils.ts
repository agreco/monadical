
import { Collapse, Joiner, ValidLength } from './index';

import curry from './curry'

export const validLength: ValidLength  =
  curry((str: string, len: number) => str.length === len);

export const joiner: Joiner =
  curry(<T>(delim: string, arr: T[]): string => arr.join(delim));

export const trim: (a: string) => string =
  curry((str: string): string => str.trim());

export const collapse: Collapse =
  curry((delim: string, str: string): string => str.replace(new RegExp('\\' + delim , 'g'), ''));

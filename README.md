[![Build Status](https://travis-ci.org/agreco/monadical.svg?branch=master)](https://travis-ci.org/agreco/monadical)

![](https://github.com/agreco/monadical/blob/master/assets/images/logo-with-text.png)

_A small set of monadic data types to get you going functionally, with some optional extras_

Monadical provides data-types and functions such as `Either` or `curry`, allowing you to compose operations originating from different context such as generators or monads, with safety in mind. 

## Installation

To install the latest stable version, run either of the following via a terminal:

_using npm_
```shell script
npm install monadical
```

_using yarn_
```shell script
yarn add monadical
```
## Usage & Compatibility
The project is currently written in Typescript, targeting version 3.6.x compiling down to es5. Note: CommonJS is the supported target, future work includes adding UMD support.

Using ES6, you can use the following import syntax:
```js
import Either, { Left, Right } from 'monadical/either';
```

So, to import the `Maybe` data-type with composing functions, you would write the following using ES6:
```js
import Maybe from 'monadical/maybe';
import compose from 'monadical/compose';
import chainC from 'monadical/chainC';
import isNumber from 'monadical/isNumber';

const add10 = amount => Maybe.nullable(isNumber(amount) ? amount + 10 : void 0);
const safelyAdd10 = compose(chainC(x => `My amount is now: ${x}`), add10);

console.assert(safelyAdd10(20) === 'My amount is now: 30')
console.assert(safelyAdd10(null) === void 0)
```

## Supported Types
The following provides an outline of each data-type and their supported operations.

#### Container

*Operations:*

- get: `(): T`
- map: `<U>(f: (x: T) => U): Container<U>`
- join: `(): Container<T>`
- _static_ of: `<U>(value: U): Container<U>`
      
#### Maybe

*Operations:*

- isNothing: `(): boolean`
- isJust: `(): boolean`
- _static_ just: `<J, N>(val: J): Just<J>`
- _static_ nothing: `<J, N>(_: N): Nothing<N>`
- _static_ of: `<J>(val: J): Just<J>`
- _static_ nullable: `<J, N>(val: J): Maybe<J, N>`
    
#### Just

*Operations:*

- isNothing: `(): boolean`
- isJust: `(): boolean`
- get value: `(): J`
- map: `(func: (a: J) => J): Just<J>`
- chain: `<T>(func: (a: J) => T): T`
- getOrElse: `(_: any): J`
- filter: `<N>(func: (a: J) => boolean): Maybe<J, N>`
      
#### Nothing

*Operations:*
  
- isNothing: `(): boolean`
- isJust: `(): boolean`
- map: `(_: any): Nothing<N>`
- chain: `(_: any): N`
- getOrElse: `<T>(defaultVal: T): T`
- filter: `(_: any): Nothing<N>`

#### Either

*Operations:*

- get value: `(): T`
- _static_ left: `<L, R>(val: L): Left<L, R>`
- _static_ right: `<L, R>(val: R): Right<L, R>`
- _static_ of: `<L, R>(val: R): Right<L, R>`
- _static_ nullable: `<T>(value: T): Either<null, T>`
  
#### Left

*Operations:*

- isRight: `(): boolean`
- isLeft: `(): boolean`
- map: `<T>(func: (val: L) => T): Either<L, T>`
- getOrElse: `(defaultVal: any): any`
- orElse: `(func: (val: L) => any): any`
- chain: `<T>(func: (a: R) => T): Left<L, R>`
- getOrElseThrow: `(func: (val: L) => Error): R | Error`
- filter: `(func: (val: R) => boolean): this`

#### Right

*Operations:*

- get value: `(): R`
- isRight: `(): boolean`
- isLeft: `(): boolean`
- map: `<T>(func: (val: R) => T): Either<L, T>`
- getOrElse: `<T>(defaultVal: T): R`
- orElse: `(func: (val: R) => any): this`
- chain: `<T>(func: (a: R) => T): T`
- getOrElseThrow: `(func: (val: L | R) => Error): R | Error`
- filter: `(func: (val: R) => boolean): Either<L, R>`

#### IO:

*Operations:*

- map: `<U>(func: Func1<U>): IO<Func1<U>>`
- chain: `(func: Func1Optional): any`
- run: `(): any`
- _static_ of: `<U>(val: U): IO<U>`
- _static_ from: `<T>(func: Func1Optional): IO<T>`
- _static_ lift: `<U>(val: U): IO<U>`

#### Empty

*Operations:*
  
- map: `(_: any): void`
- fmap: `(_: any): Empty`


## Monadic operations during programmable commas
For programmable commas, some operations are available allowing you to compose functions:  
   
### Operating on Monads/values

- mapC: `MapC = {
    <T, V>(func: T): (container: Monadical<V>) => any;
    <T, V>(func: T, container: Monadical<V>): any;
};`

- chainC: `ChainC = {
  <T, V>(func: T): (container: Monadical<V>) => any;
  <T, V>(func: T, container: Monadical<V>): any;
};`

- getOrElseC: `GetOrElseC = {
  <T, V>(val: T): (container: Monadical<V>) => any;
  <T, V>(val: T, container: Monadical<V>): any;
};`


### Operating on Monads/values encapsulated in generators

- mapG: `MapG = {
  <T>(a: T): <V>(b: V) => MapC
  <T, V>(a: T, b: V): MapC
};`

- chainG: `ChainG = {
  <T>(a: T): <V>(b: V) => ChainC
  <T, V>(a: T, b: V): ChainC
};`

- extractG: `ExtractG = { <T>(a: T): any };`

- safeHandleErrorG: `SafeHandleErrorG = {
  <T>(a: FuncSpreadable): (b: Generator<any, T, any>) => EitherResult<T>
  <T>(a: FuncSpreadable, b: Generator<any, T, any>):  EitherResult<T>
};`

- safeUnpackG: `SafeUnpackG = {
  <T>(errorHandler: FuncSpreadable): FuncSpreadT<T>
};`

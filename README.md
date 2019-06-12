# Monadical
_A small set of monadic data types to get you going functionally, with some optional extras_

## Supported Types, Interfaces and Monads

### Types

* `FuncT = <A>(a: A | void) => any | void;`

### Interfaces

* `IIndexableAny { [ key: string ]: any; }`

* `IMonadical { chain: any, map: any, getOrElse: any }`

### Monads

The following provides a outline of each monad and their supported operations and signature. It is worth taking a look into each monadic type and their test cases, to gain a deeper understanding of how each operation is used and their possible outcomes.

#### Container

straight up container monad:

*Operations:*

- get: `(): T`
- map: `<U>(f: (x: T) => U): Container<U>`
- join: `Container<T>`
- of: `<U>(value: U): Container<U>`
      
*Exports:*
  
Container based operations for monads such as Either and Maybe, useful during programmable commas
   
- mapC: `(f: FuncT, container: IMonadical) => container.map(f)`
- chainC: `(f: FuncT, container: IMonadical) => container.chain(f)`
- getOrElseC: `(message: string, container: IMonadical) => container.getOrElse(message)`

#### Maybe

*Operations:*

- isNothing: `(): boolean`
- isJust: `(): boolean`
- just: `<T>(val: T): Just<T>`
- nothing: `<T>(val: T): Nothing<T>`
- of: `<T>(val: T): Just<T>`
- nullable: `<U>(val: U): Just<U> | Nothing<U>`
    
#### Just

*Operations:*

- get value: `(): T`
- map: `<V>(func: (a: any) => V): Just<V> | Nothing<V>`
- chain: `<V>(func: (a: any) => V): V`
- getOrElse: `<A>(val: A): T`
- filter: `<U>(func: (a: any) => any): Just<U> | Nothing<U>`
- get isJust: `(): boolean`
      
#### Nothing

*Operations:*
  
- get value: `() : TypeError`
- get isNothing `() : boolean`
- map: `(func: (a: any) => any): Nothing<U>`
- chain: `(func: (a: any) => any)a
- getOrElse: `<V>(val: V): V`
- filter: `(func: (a: any) => any): Nothing<U>`

#### Either

*Operations:*

- get value: `(): T`
- _static_ left: `<U>(value: U): Left<U>`
- _static_ right: `<U>(value: U): Right<U>`
- _static_ of: `<U>(value: U): Right<U>`
- _static_ nullable: `<U>(value: U): Right<U> | Left<U>`
  
#### Left

*Operations:*

- get value: `(): TypeError`
- get isRight: `(): boolean`
- get isLeft: `(): boolean`
- map: `<U>(_: any): Left<U>`
- getOrElse: `<U>(defaultVal: U): U`
- orElse: `<V>(func: (a: any) => V): V`
- chain: `(func: (a: any) => any): Left<U>`
- getOrElseThrow: `(val: string): Error`
- filter: `(func: (a: any) => any): Left<U>`

#### Right

*Operations:*

- get isRight: `(): boolean`
- get isLeft: `(): boolean`
- map: `<V>(func: (a: any) => V): Right<V>`
- getOrElse: `(val: T): T`
- orElse: `(): Right<T>`
- chain: `<V>(func: (a: any) => V): V`
- getOrElseThrow: `(_: any): Right<U>`
- filter: `<U>(func: (a: any) => any): Right<U> | Left<U>`

#### IO:

*Operations:*

- map: `(func: FuntT): IO<FuncT>`
- chain: `(func: FuncT): any`
- run: `(): any`
- of: `<U>(val: U): IO<U>`
- from: `<T>(func: FuncT): IO<T>`
- lift: `<U>(val: U): IO<U>`

#### Empty

*Operations:*
  
- map: `(_: any): void`
- fmap: `(_: any): Empty`

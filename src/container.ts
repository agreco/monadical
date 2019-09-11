
class Container<T> {

  _value: T;

  public constructor (value: T) {
    this._value = value;
  }

  public get (): T {
    return this._value;
  }

  public map <U>(f: (x: T) => U): Container<U> {
    return Container.of(f(this._value));
  }

  public join (): Container<T> {
    return !(this._value instanceof Container) ? this : this._value.join();
  }

  public static of <U>(value: U): Container<U> {
    return new Container(value);
  }

  public toString (): string {
    return `Container[${this._value}]`;
  }
}

export default Container;

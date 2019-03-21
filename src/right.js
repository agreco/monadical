
import Either from './either';

export default class Right extends Either {

  map = func => Either.of(func(this.value));

  getOrElse = val => this.value;

  orElse = () => this;

  chain = func => func(this.value);

  getOrElseThrow = _ => this.value;

  filter = func => Either.nullable(func(this.value) ? this.value : null);

  get isRight () { return true; }

  get isLeft () { return false; }

  toString = () => `Right[${this.value}]`;
}

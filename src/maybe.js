
import notNull from "./notNull";
import Just from './just';
import Nothing from './nothing';

export default class Maybe {

	static just = val => new Just(val);

	static nothing = () => new Nothing();

	static nullable = val => notNull(val) ? Maybe.just(val) : Maybe.nothing();

	static of = val => Maybe.just(val);

	get isNothing () { return false };

	get isJust () { return false; }
};

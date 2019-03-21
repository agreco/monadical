
import notNil from "./notNil";
import Left from "./left";
import Right from "./right";

export default class Either {

	constructor (val) {
		this._val = val;
	}

	get value () { return this._val; }

	static left = val => new Left(val);

	static right = val => new Right(val);

	static nullable = val => notNil(val) ? Either.right(val) : Either.left(val);

	static of = val => Either.right(val);
};


declare const pipe: <R>(...fns: ((a: R) => R)[]) => (a: R) => R;
export default pipe;

declare const compose: <R>(...fns: ((...a: any[]) => R)[]) => (a: R) => R;
export default compose;

declare const compose: <R = any>(...fns: ((...a: any[]) => R)[]) => (a: R) => R;
export default compose;

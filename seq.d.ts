declare const seq: (...fns: ((...a: any[]) => any)[]) => (...s: any[]) => void;
export default seq;

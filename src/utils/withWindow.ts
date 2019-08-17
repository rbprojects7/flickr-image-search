/* eslint-disable @typescript-eslint/no-explicit-any */
export function withWindow<T extends Function>(fn: T): T {
    if (typeof window !== 'undefined') {
        return fn;
    }

    return function(...args) {
        const globalAny: any = global;

        globalAny.window = {};

        const result = fn(...args);

        globalAny.window = undefined;

        return result;
    } as any;
}

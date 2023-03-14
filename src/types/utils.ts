export type MaybePromise<T> = T | Promise<T>;

export type Rename<T, K extends keyof T, N extends string> = Omit<T, K> & { [P in N]: T[K] };

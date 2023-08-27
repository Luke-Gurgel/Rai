export type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T & string as `${string & keyof T}.${string &
        keyof T[K]}`]: T[K][keyof T[K]];
    }
  : never;

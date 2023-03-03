// Functional approach
export const HelloService = {
  sayHi: (name?: string): string => `Hello, ${name ?? 'World'}!`,
  sayHiAsync: (name?: string): Promise<string> =>
    new Promise((resolve) => {
      setTimeout(() => resolve(`Hello, ${name ?? 'World'}!`), 100);
    }),
} as const;

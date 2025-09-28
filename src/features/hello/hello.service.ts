/**
 * Functional approach
 */
export const HelloService = {
  sayHi: (name?: string): string => `Hello, ${name ?? "World"}!`,
  sayHiAsync: (name?: string): Promise<string> => {
    const timeToWait = 100;

    return new Promise((resolve) => {
      setTimeout(() => resolve(`Hello, ${name ?? "World"}!`), timeToWait);
    });
  },
} as const;

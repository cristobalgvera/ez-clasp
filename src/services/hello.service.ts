// Functional approach
const HelloService = {
  sayHi: (name?: string): string => `Hello, ${name ?? 'World'}!`,
  sayHiAsync: async (name?: string): Promise<string> =>
    `Hello, ${name ?? 'World'}!`,
} as const;

export default HelloService;

// Functional approach
const HelloService = {
  sayHi: (name?: string): string => `Hello, ${name ?? 'World'}!`,
};

export default HelloService;

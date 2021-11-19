// Functional approach
const HelloService = {
  sayHi: (name?: string) => console.log(`Hello, ${name ?? 'World'}!`),
};

export default HelloService;

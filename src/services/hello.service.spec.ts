import HelloService from './hello.service';

describe('HelloService', () => {
  it('should return hi message with default name "World" when no name is passed', () => {
    const message = HelloService.sayHi();
    expect(message).toContain('World');
  });

  it('should return hi message with passed name', () => {
    const name = 'John';
    const message = HelloService.sayHi(name);
    expect(message).toContain(name);
  });
});

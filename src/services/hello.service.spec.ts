import HelloService from './hello.service';

describe('hello service', () => {
  const NAME = 'John';

  it('should return hi message with default name "World" when no name is provided', () => {
    const message = HelloService.sayHi();
    expect(message).toContain('World');
  });

  it('should return hi message with provided name', () => {
    const message = HelloService.sayHi(NAME);
    expect(message).toContain(NAME);
  });

  it('should return hi async message with provided name', async () => {
    const message = await HelloService.sayHiAsync(NAME);
    expect(message).toContain(NAME);
  });
});

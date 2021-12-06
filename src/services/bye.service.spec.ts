import ByeService from './bye.service';

describe('bye service', () => {
  const NAME = 'John';

  it('should return bye message with provided name', () => {
    const message = ByeService.sayBye(NAME);
    expect(message).toContain(NAME);
  });

  it('should return bye message with default name "World" when no name is provided', () => {
    const message = ByeService.sayBye();
    expect(message).toContain('World');
  });

  it('should return bye message async with provided name', async () => {
    const message = await ByeService.sayByeAsync(NAME);
    expect(message).toContain(NAME);
  });
});

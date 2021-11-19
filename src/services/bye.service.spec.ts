import ByeService from './bye.service';

describe('ByeService', () => {
  it('should return bye message with name passed', () => {
    const name = 'John';
    const message = ByeService.sayBye(name);
    expect(message).toContain(name);
  });

  it('should return bye message with default name "World" when no name is passed', () => {
    const message = ByeService.sayBye();
    expect(message).toContain('World');
  });
});

import { createMock } from '@golevelup/ts-jest';
import { ByeService } from '@features/bye';
import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let underTest: GreetingService;
  let byeService: ByeService;

  beforeEach(() => {
    byeService = createMock<ByeService>();

    underTest = new GreetingService(byeService);
  });

  it('should be defined', () => {
    expect(underTest).toBeDefined();
    expect(byeService).toBeDefined();
  });

  describe('greet', () => {
    it('should return greeting message', () => {
      const expected = 'Greeting message';

      jest.spyOn(byeService, 'sayBye').mockReturnValueOnce(expected);

      const actual = underTest.greet('name');

      expect(actual).toEqual(expected);
    });

    it('should call ByeService with provided parameter', () => {
      const expected = 'name';

      const byeServiceSpy = jest.spyOn(byeService, 'sayBye');

      underTest.greet(expected);

      expect(byeServiceSpy).toHaveBeenCalledWith(expected);
    });
  });
});

import { createMock } from '@golevelup/ts-jest';
import { ByeService } from '@features/bye';
import { GreetingService } from './greeting.service';
import { EnvironmentService } from '@core/environment';

describe('GreetingService', () => {
  let underTest: GreetingService;
  let byeService: ByeService;
  let environmentService: EnvironmentService;

  beforeEach(() => {
    byeService = createMock<ByeService>();
    environmentService = createMock<EnvironmentService>();

    underTest = new GreetingService(byeService, environmentService);
  });

  it('should be defined', () => {
    expect(underTest).toBeDefined();
    expect(byeService).toBeDefined();
    expect(environmentService).toBeDefined();
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

  describe('useSecretValue', () => {
    it('should return the value', () => {
      const expected = 'secret_value';

      jest.spyOn(environmentService, 'get').mockReturnValueOnce(expected);

      const actual = underTest.useSecretValue();

      expect(actual).toEqual(expected);
    });

    it('should call EnvironmentService', () => {
      const environmentServiceSpy = jest.spyOn(environmentService, 'get');

      underTest.useSecretValue();

      expect(environmentServiceSpy).toHaveBeenCalledTimes(1);
    });
  });
});

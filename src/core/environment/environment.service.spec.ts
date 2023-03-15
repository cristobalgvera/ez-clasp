import { EnvironmentService } from './environment.service';
import { Environment } from './environment.type';

describe('EnvironmentService', () => {
  const originalEnv = process.env;

  let underTest: EnvironmentService;

  beforeEach(() => {
    underTest = new EnvironmentService();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('get', () => {
    describe('when the environment variable is defined', () => {
      const environment: Environment = {
        MY_SECRET_VALUE: 'secret',
        MY_SECRET_NUMBER: 12345,
      };

      beforeEach(() => {
        process.env = environment as any;
      });

      it.each(Object.keys(environment) as (keyof typeof environment)[])(
        'should return the value of the variable called %s',
        (key) => {
          const expected = environment[key];

          const actual = underTest.get(key);

          expect(actual).toEqual(expected);
        },
      );
    });

    describe('when the environment variable is not defined', () => {
      beforeEach(() => {
        process.env = {} as any;
      });

      it('should return an undefined', () => {
        const actual = underTest.get('NOT_DEFINED_VARIABLE' as any);

        expect(actual).toBeUndefined();
      });
    });
  });
});

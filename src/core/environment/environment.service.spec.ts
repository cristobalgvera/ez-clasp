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

  describe('getSecretValue', () => {
    const environment = {
      MY_SECRET_VALUE: 'secret',
    } as Environment;

    beforeEach(() => {
      process.env = environment as any;
    });

    it('should return the value of the secret', () => {
      const expected = environment.MY_SECRET_VALUE;

      const actual = underTest.getSecretValue();

      expect(actual).toEqual(expected);
    });
  });

  describe('getSecretNumber', () => {
    const environment = {
      MY_SECRET_NUMBER: 12345,
    } as Environment;

    beforeEach(() => {
      process.env = environment as any;
    });

    it('should return the value of the secret', () => {
      const expected = environment.MY_SECRET_NUMBER;

      const actual = underTest.getSecretNumber();

      expect(actual).toEqual(expected);
    });
  });
});

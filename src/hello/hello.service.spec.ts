import { HelloService } from './hello.service';

describe('HelloService', () => {
  describe('sayHi', () => {
    describe('sync', () => {
      describe('when name is provided', () => {
        it('should return hi message with provided name', () => {
          const expected = 'John';
          const actual = HelloService.sayHi(expected);
          expect(actual).toContain(expected);
        });
      });

      describe('when name is not provided', () => {
        it('should return hi message with default name', () => {
          const actual = HelloService.sayHi();
          expect(actual).toMatchInlineSnapshot(`"Hello, World!"`);
        });
      });
    });

    describe('async', () => {
      describe('when name is provided', () => {
        it('should return hi async message with provided name', async () => {
          const expected = 'John';
          const actual = await HelloService.sayHiAsync(expected);
          expect(actual).toContain(expected);
        });
      });

      describe('when name is not provided', () => {
        it('should return hi async message with default name', async () => {
          const actual = await HelloService.sayHiAsync();
          expect(actual).toMatchInlineSnapshot(`"Hello, World!"`);
        });
      });
    });
  });
});

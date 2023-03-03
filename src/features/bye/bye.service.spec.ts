import { ByeService } from './bye.service';

describe('ByeService', () => {
  let underTest: ByeService;

  beforeEach(() => {
    underTest = new ByeService();
  });

  describe('sayBye', () => {
    describe('non-static', () => {
      it('should return bye message with provided name', () => {
        const expected = 'John';
        const actual = underTest.sayBye(expected);
        expect(actual).toContain(expected);
      });
    });

    describe('static', () => {
      describe('sync', () => {
        describe('when name is provided', () => {
          it('should return bye message with provided name', () => {
            const expected = 'John';
            const actual = ByeService.sayBye(expected);
            expect(actual).toContain(expected);
          });
        });

        describe('when name is not provided', () => {
          it('should return bye message with default name', () => {
            const actual = ByeService.sayBye();
            expect(actual).toMatchInlineSnapshot(`"Bye, World!"`);
          });
        });
      });

      describe('async', () => {
        describe('when name is provided', () => {
          it('should return bye message with provided name', async () => {
            const expected = 'John';
            const actual = await ByeService.sayByeAsync(expected);
            expect(actual).toContain(expected);
          });
        });

        describe('when name is not provided', () => {
          it('should return bye message with default name', async () => {
            const actual = await ByeService.sayByeAsync();
            expect(actual).toMatchInlineSnapshot(`"Bye, World!"`);
          });
        });
      });
    });
  });
});

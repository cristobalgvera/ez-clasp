import { Environment } from './environment.type';

/**
 * Environment variables usage approach
 *
 * ---
 *
 * You can use an EnvironmentService in order to
 * avoid repeat the `process.env` pattern.
 *
 * You are free to implement this in any way you
 * want, but this is a good starting point.
 *
 * I recommend you to make extensive usage of
 * generics when implementing a single environment
 * variable getter method. Like so:
 *
 * ```typescript
 * get<Key extends keyof Environment>(key: Key): Environment[Key] {
 *   // Implementation...
 * }
 * ```
 */
export class EnvironmentService {
  get<Key extends keyof Environment>(key: Key): Environment[Key] {
    const value = this.getOrThrow(key);

    return this.parseEnvironmentVariable(value, key);
  }

  private getOrThrow(key: string): string {
    function throwError(): never {
      throw new ReferenceError(`Environment variable ${key} is not defined`);
    }

    switch (key) {
      case 'MY_SECRET_VALUE':
        return process.env.MY_SECRET_VALUE ?? throwError();
      case 'MY_SECRET_NUMBER':
        return process.env.MY_SECRET_NUMBER ?? throwError();
    }

    throwError();
  }

  private parseEnvironmentVariable<Key extends keyof Environment>(
    value: string,
    key: Key,
  ): Environment[Key] {
    switch (key) {
      case 'MY_SECRET_VALUE':
        return String(value) as Environment[Key];
      case 'MY_SECRET_NUMBER':
        return Number(value) as Environment[Key];
    }

    throw new ReferenceError(`Environment variable ${key} is not defined`);
  }
}

/**
 * Class approach
 */
export class ByeService {
  sayBye(name: string): string {
    return ByeService.sayBye(name);
  }

  static sayBye(name?: string): string {
    return `Bye, ${name ?? "World"}!`;
  }

  static sayByeAsync(name?: string): Promise<string> {
    const timeToWait = 100;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ByeService.sayBye(name));
      }, timeToWait);
    });
  }
}

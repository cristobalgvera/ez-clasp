// Class approach
export default class ByeService {
  static sayBye(name?: string): string {
    return `Bye, ${name ?? 'World'}!`;
  }

  static sayByeAsync(name?: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.sayBye(name));
      }, 100);
    });
  }
}

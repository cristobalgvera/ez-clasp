// Class approach
export default class ByeService {
  static sayBye(name?: string): string {
    return `Bye, ${name ?? 'World'}!`;
  }
}

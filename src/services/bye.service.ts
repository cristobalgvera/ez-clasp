// Class approach
export default class ByeService {
  static sayBye(name?: string) {
    console.log(`Bye, ${name ?? 'World'}!`);
  }
}

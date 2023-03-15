import { ByeService } from '../bye';

// Dependency Injection (ish) approach
export class GreetingService {
  constructor(private readonly byeService: ByeService) {}

  greet(name: string): string {
    return this.byeService.sayBye(name);
  }
}

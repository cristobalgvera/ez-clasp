import { EnvironmentService } from '@core/environment';
import { ByeService } from '../bye';

/**
 * Dependency Injection (ish) approach
 */
export class GreetingService {
  constructor(
    private readonly byeService: ByeService,
    private readonly environmentService: EnvironmentService,
  ) {}

  greet(name: string): string {
    return this.byeService.sayBye(name);
  }

  useSecretValue(): string {
    return this.environmentService.getSecretValue();
  }
}

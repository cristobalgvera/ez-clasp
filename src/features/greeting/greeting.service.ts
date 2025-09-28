import type { EnvironmentService } from "@core/environment/environment.service";
import type { ByeService } from "../bye/bye.service";

/**
 * Dependency Injection (ish) approach
 */
export class GreetingService {
  readonly #byeService: ByeService;
  readonly #environmentService: EnvironmentService;

  constructor(byeService: ByeService, environmentService: EnvironmentService) {
    this.#byeService = byeService;
    this.#environmentService = environmentService;
  }

  greet(name: string): string {
    return this.#byeService.sayBye(name);
  }

  useSecretValue(): string {
    return this.#environmentService.get("MY_SECRET_VALUE");
  }
}

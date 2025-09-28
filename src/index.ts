/** biome-ignore-all lint/correctness/noUnusedVariables: This file groups all functions that will be used externally */

import { EnvironmentService } from "@core/environment/environment.service";
import { ByeService } from "@features/bye/bye.service";
import { GreetingService } from "@features/greeting/greeting.service";
import { HelloService } from "@features/hello/hello.service";

// @ts-expect-error
function main(): void {
  const byeService = new ByeService();
  const environmentService = new EnvironmentService();
  const greetingService = new GreetingService(byeService, environmentService);

  const hiMessage = HelloService.sayHi("CLASP");
  const byeMessage = ByeService.sayBye("CLASP");
  const greeting = greetingService.greet("CLASP");
  const secretValue = greetingService.useSecretValue();

  // biome-ignore lint/suspicious/noConsole: Template-related code
  console.log({ hiMessage, byeMessage, greeting, secretValue });
}

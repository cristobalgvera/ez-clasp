import { EnvironmentService } from '@core/environment';
import { ByeService } from '@features/bye';
import { GreetingService } from '@features/greeting';
import { HelloService } from '@features/hello';

// @ts-ignore
function main(): void {
  const byeService = new ByeService();
  const environmentService = new EnvironmentService();
  const greetingService = new GreetingService(byeService, environmentService);

  const hiMessage = HelloService.sayHi('CLASP');
  const byeMessage = ByeService.sayBye('CLASP');
  const greeting = greetingService.greet('CLASP');
  const secretValue = greetingService.useSecretValue();

  console.log({ hiMessage, byeMessage, greeting, secretValue });
}

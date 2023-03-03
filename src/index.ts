import { ByeService } from '@features/bye';
import { GreetingService } from '@features/greeting';
import { HelloService } from '@features/hello';

// @ts-ignore
function main(): void {
  const byeService = new ByeService();
  const greetingService = new GreetingService(byeService);

  const hiMessage = HelloService.sayHi('CLASP');
  const byeMessage = ByeService.sayBye('CLASP');
  const greeting = greetingService.greet('CLASP');

  console.log({ hiMessage, byeMessage, greeting });
}

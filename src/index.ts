import { ByeService } from './bye';
import { HelloService } from './hello';

// @ts-ignore
function main(): void {
  const hiMessage = HelloService.sayHi('CLASP');
  const byeMessage = ByeService.sayBye('CLASP');

  console.log({ hiMessage, byeMessage });
}

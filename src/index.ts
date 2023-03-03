import ByeService from './services/bye.service';
import HelloService from './services/hello.service';

export function main(): void {
  const hiMessage = HelloService.sayHi('CLASP');
  const byeMessage = ByeService.sayBye('CLASP');

  console.log({ hiMessage, byeMessage });
}

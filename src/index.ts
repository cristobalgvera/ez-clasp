import ByeService from './services/bye.service';
import HelloService from './services/hello.service';

// @ts-ignore
function main(): void {
  const hiMessage = HelloService.sayHi('CLASP');
  const byeMessage = ByeService.sayBye('CLASP');

  console.log({ hiMessage, byeMessage });
}

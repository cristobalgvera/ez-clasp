/* eslint-disable @typescript-eslint/no-unused-vars */
import ByeService from './services/bye.service';
import HelloService from './services/hello.service';

function main(): void {
  const hiMessage = HelloService.sayHi('CLASP');
  const byeMessage = ByeService.sayBye('CLASP');

  console.log(hiMessage);
  console.log(byeMessage);
}

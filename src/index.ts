import ByeService from './services/bye.service';
import HelloService from './services/hello.service';

function main() {
  HelloService.sayHi('CLASP');
  ByeService.sayBye('CLASP');
}

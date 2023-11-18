import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService implements IAppService {
  
  getHello = () => {
    return "Hello World!";
  };
}

interface IAppService {
  getHello: Function;
}

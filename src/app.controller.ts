import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return '<div style="background: black; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-size: 3rem; color: steelblue;">Hi there, Bill</h1><h2 style="font-size: 1.75rem; color: white;">Welcome to your very first NestJS app!!!</h2></div>';
  }
  @Get('/fun')
  getfunRoute() {
    return '<div style="background: coral; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-size: 3rem; color: steelblue;">Fun Page</h1><h2 style="font-size: 1.75rem; color: white;">Q: Why don\'t tennis players fall in love? </h2><h2 style="font-size: 1.75rem; color: white;">A: Because love means nothing to them!!</h2></div>';
  }
}
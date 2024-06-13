import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return '<div style="background: black; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-size: 3rem; color: steelblue;">Hi there, Bill</h1><h2 style="font-size: 1.75rem; color: white;">Welcome to your very first NestJS app!!!</h1></div>';
  }
}
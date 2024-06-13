import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return '<div style="background: black; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="font-size: 3rem; color: steelblue;">Hi there, Bill</h1><h2 style="font-size: 1.75rem; color: white;">Welcome to your very first NestJS app!!!</h1></div>';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}

bootstrap();

import { Controller, Module, Get } from "@nestjs/common"
import { NestFactory } from "@nestjs/core";


@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return "<h1>Hi There</h1>";
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    await app.listen(3000);
}

bootstrap();
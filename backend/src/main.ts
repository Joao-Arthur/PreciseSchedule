import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    //TODO substituir o cors por um proxy
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        cors: true
    });
    await app.listen(3001);
}

bootstrap();

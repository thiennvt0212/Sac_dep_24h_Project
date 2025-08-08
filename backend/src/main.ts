import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT') || 4000;

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));

  //config cors
  app.enableCors(
    {
      "origin": true,
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      credentials: true
    }
  );

  // prefix api/v1
  app.setGlobalPrefix('api/v1', { exclude: [''] })

  await app.listen(port, '0.0.0.0');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

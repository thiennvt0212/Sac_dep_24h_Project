import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const configService = app.get(ConfigService);

    // Lấy port theo thứ tự: ENV -> ConfigService -> default 4000
    const envPort = process.env.PORT ? Number(process.env.PORT) : undefined;
    const cfgPort = configService.get<number | string>('PORT');
    const port =
      envPort ??
      (typeof cfgPort === 'string' ? Number(cfgPort) : cfgPort) ??
      4000;

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
      }),
    );

    // CORS
    app.enableCors({
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      credentials: true,
    });

    // Prefix API
    app.setGlobalPrefix('api/v1', { exclude: [''] });

    // Để OnModuleDestroy gọi được khi process kết thúc
    app.enableShutdownHooks();

    await app.listen(port, '0.0.0.0');
    console.log(`Nest application successfully started on port ${port}`);
  } catch (err) {
    console.error('Bootstrap failed:', err);
    process.exit(1);
  }
}

bootstrap();

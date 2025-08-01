import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ✅ Thêm dòng này để bật CORS
  app.enableCors({
    origin: '*', // ← Địa chỉ FE của bạn
    credentials: true, // ← Cho phép gửi cookie/token
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

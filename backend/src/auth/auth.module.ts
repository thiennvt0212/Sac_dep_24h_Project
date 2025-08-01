import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport'; // 👈 Cần thiết
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy'; // 👈 Import

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ✅ Đảm bảo global
    PassportModule.register({ defaultStrategy: 'jwt' }), // ✅ Quan trọng: defaultStrategy
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy, // ✅ Đã đăng ký
  ],
  controllers: [AuthController],
  exports: [AuthService, PassportModule, JwtModule], // ✅ Export để dùng ở các module khác
})
export class AuthModule { }
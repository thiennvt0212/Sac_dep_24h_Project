import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { CartController } from './cart/cart.controller';
import { FavoriteController } from './favorite/favorite.controller';

import { BlogController } from './blog/blog.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, ProductModule],
  controllers: [AppController, CartController, FavoriteController, BlogController],
  providers: [AppService],
})
export class AppModule { }

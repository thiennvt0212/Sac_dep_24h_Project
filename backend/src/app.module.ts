import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './modules/products/products.module';
import { UserModule } from './modules/user/user.module';
// import { CartModule } from './modules/cart/cart.module';
import { CategoryModule } from './modules/category/category.module';
import { NewsModule } from './modules/news/news.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ProductsModule,
    UserModule,
    // CartModule,
    CategoryModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

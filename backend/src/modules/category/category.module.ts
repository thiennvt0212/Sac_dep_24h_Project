import { Module } from '@nestjs/common';
import { CategoryProductService } from './category.service';
import { CategoryProductController } from './category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CategoryProductController],
  providers: [CategoryProductService, PrismaService],
})
export class CategoryModule {}

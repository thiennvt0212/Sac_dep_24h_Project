import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('productss')
export class ProductController {
    @Get()
    async getAll() {
        return prisma.product.findMany();
    }
}
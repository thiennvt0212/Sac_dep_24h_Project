import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('blogs')
export class BlogController {
    @Get()
    async getAllBlogs() {
        return prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
}
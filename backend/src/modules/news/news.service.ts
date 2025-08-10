import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNewsDto) {
    return this.prisma.news.create({ data });
  }

  async findAll() {
    return this.prisma.news.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const news = await this.prisma.news.findUnique({ where: { id } });
    if (!news) throw new NotFoundException('Không tìm thấy tin tức');
    return news;
  }

  async update(id: string, data: UpdateNewsDto) {
    await this.findOne(id); // Check tồn tại
    return this.prisma.news.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.news.delete({ where: { id } });
  }
}

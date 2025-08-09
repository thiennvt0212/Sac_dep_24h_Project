import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryProductDto } from './dto/create-category.dto';
import { UpdateCategoryProductDto } from './dto/update-category.dto';

@Injectable()
export class CategoryProductService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCategoryProductDto) {
    return this.prisma.categoryProduct.create({ data });
  }

  findAll() {
    return this.prisma.categoryProduct.findMany();
  }

  async findOne(id: string) {
    const category = await this.prisma.categoryProduct.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(id: string, data: UpdateCategoryProductDto) {
    await this.findOne(id); // check tồn tại
    return this.prisma.categoryProduct.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.categoryProduct.delete({ where: { id } });
  }
}

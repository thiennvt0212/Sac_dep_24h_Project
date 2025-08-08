import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryProductService } from './category.service';
import { CreateCategoryProductDto } from './dto/create-category.dto';
import { UpdateCategoryProductDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryProductController {
  constructor(private readonly categoryProductService: CategoryProductService) {}

  @Post()
  create(@Body() createCategoryProductDto: CreateCategoryProductDto) {
    return this.categoryProductService.create(createCategoryProductDto);
  }

  @Get()
  findAll() {
    return this.categoryProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryProductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryProductDto: UpdateCategoryProductDto) {
    return this.categoryProductService.update(id, updateCategoryProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryProductService.remove(id);
  }
}

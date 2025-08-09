import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryProductDto } from './create-category.dto';

export class UpdateCategoryProductDto extends PartialType(CreateCategoryProductDto) {}

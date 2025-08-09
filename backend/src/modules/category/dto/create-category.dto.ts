import { IsString, IsOptional } from 'class-validator';

export class CreateCategoryProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
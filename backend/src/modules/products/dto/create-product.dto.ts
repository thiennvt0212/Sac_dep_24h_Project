import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsOptional()
  image?: string;

  @IsString()
  sku: string;

  @IsString()
  category: string; // ObjectId dạng string

  @Type(() => Number)
  @IsNumber()
  quantity: number;
}

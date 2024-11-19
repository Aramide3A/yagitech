import { IsEnum, IsString } from 'class-validator';
import { Category } from './category.enum';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class productDto {
  @ApiProperty({
    description: "Product Name",
    example : "1kva inverter head"
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "Product Price",
    example : "200000"
  })
  @Transform(({ value }) => parseInt(value, 10))
  price: string;

  @ApiProperty({
    description: "Product Description",
    example : "1kva inverter head for powering your 2 bedroom home"
  })
  @IsString()
  specification: string;

  @ApiProperty({
    enum: Category,
    description: "Product Category",
    example : Category.BATTERY
  })
  @IsEnum(Category)
  category: Category;
}

import { Body, Controller, Get, Param, ParseIntPipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { productDto } from './dto/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Category } from './dto/category.enum';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    getProducts(){
        return this.productService.getAllProducts()
    }

    @Get('/:category')
    getProductCatgeories(@Param('category') category){
        return this.productService.getProductCategory(category)
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    newProduct(@Body() dto: productDto, @UploadedFile() image:Express.Multer.File){
        return this.productService.newProduct(dto,image)
    }
}

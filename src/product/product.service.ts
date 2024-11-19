import { Injectable } from '@nestjs/common';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { productDto } from './dto/product.dto';
import { Category } from './dto/category.enum';

@Injectable()
export class ProductService {
    constructor(private prisma:PrismaService, private cloudinaryService:CloudinaryService
    ){}

    async getAllProducts(){
        const all_products = await this.prisma.product.findMany({})
        return all_products
    }

    async getProductCategory(category){ 
        // const categories = Category[category]
        const get_product = await this.prisma.product.findMany({
            where: {category}
        })
        return get_product
    }

    async newProduct(dto:productDto,image){
        const {name,price,specification,category} = dto
        const parsedPrice = parseInt(price, 10);
        const result =  await this.cloudinaryService.uploadImage(image)
        const createProduct = await this.prisma.product.create({data:{
            name,price: parsedPrice,specification,category, image: result.url
        }})
        return createProduct
    }
}

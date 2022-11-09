/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';

interface Product {
  name: string;
  value: number;
}

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query('name') name: string): string {
    if (name) {
      return this.productsService.getProductByName(name);
    }
    return this.productsService.getAllProducts();
  }
  @Post()
  createProduct(@Body() product: Product) {
    
    return this.productsService.createProduct(product);
  }
  @Put(':id')
  replaceProduct(@Param('id') id: string, @Body() product: Product) {
    
    return this.productsService.replaceProduct(id, product);
  }

  @Patch()
  updateProduct(@Param('id') id: string, @Body() product: Product) {
    
    return this.productsService.updateProduct(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }

  @Get(':id')
  getProductById(@Param('id') id: string): string {
    return this.productsService.getProductById(id);
  }

  @Get()
  getProductByName(@Query('name') name: string) {
    return this.productsService.getProductByName(name);
  }
}

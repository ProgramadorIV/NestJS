import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts(): string {
    return 'todos los productos';
  }
  @Post()
  createProduct() {
    return 'producto creado';
  }
  @Put()
  replaceProduct() {
    return 'producto reemplazado';
  }

  @Patch()
  updateProduct() {
    return 'producto modificado';
  }

  @Delete()
  deleteProduct() {
    return 'producto eliminado';
  }
}

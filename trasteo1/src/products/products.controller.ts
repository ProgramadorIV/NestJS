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
  getAllProducts(): string {
    //REEMPLAZAR AQUI CON LOS METODOS DEL SERVICIO.
    return 'todos los productos';
  }
  @Post()
  createProduct(@Body() product: Product) {
    console.log(product.name);
    return 'producto creado';
  }
  @Put(':id')
  replaceProduct(@Param('id') id: string, @Body() product: Product) {
    console.log(product.name);
    return `producto ${id} reemplazado`;
  }

  @Patch()
  updateProduct() {
    return 'producto modificado';
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `producto ${id} eliminado`;
  }

  @Get(':id')
  getProductById(@Param('id') id: string): string {
    return `Producto: ${id}`;
  }

  @Get()
  getProductByName(@Query('name') name: string) {
    return `Producto con nombre ${name}`;
  }
}

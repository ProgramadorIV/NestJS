import { Injectable } from '@nestjs/common';

interface Product {
  name: string;
  value: number;
}

@Injectable()
export class ProductsService {
  getAllProducts(): string {
    return 'todos los productos';
  }

  createProduct(product: Product) {
    console.log(product.name);
    return 'producto creado';
  }

  replaceProduct(id: string, product: Product) {
    console.log(product.name);
    return `producto ${id} reemplazado`;
  }

  updateProduct() {
    return 'producto modificado';
  }

  deleteProduct(id: string) {
    return `producto ${id} eliminado`;
  }

  getProductById(id: string): string {
    return `Producto: ${id}`;
  }

  getProductByName(name: string) {
    return `Producto con nombre ${name}`;
  }
}

import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { WarehouseController } from './warehouse/warehouse.controller';
import { ProvidersController } from './providers/providers.controller';
import { ProductsService } from './products/products.service';

@Module({
  imports: [],
  controllers: [ProductsController, WarehouseController, ProvidersController],
  providers: [ProductsService],
})
export class AppModule {}

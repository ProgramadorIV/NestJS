import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { WarehouseController } from './warehouse/warehouse.controller';
import { ProvidersController } from './providers/providers.controller';

@Module({
  imports: [],
  controllers: [ProductsController, WarehouseController, ProvidersController],
  providers: [],
})
export class AppModule {}

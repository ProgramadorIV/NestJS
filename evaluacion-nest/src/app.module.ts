/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentosController } from './monumentos/monumentos.controller';
import { MonumentosModule } from './monumentos/monumentos.module';
import { MonumentosService } from './monumentos/monumentos.service';

@Module({
  imports: [MonumentosModule],
  controllers: [AppController, MonumentosController],
  providers: [AppService, MonumentosService],
})
export class AppModule {}

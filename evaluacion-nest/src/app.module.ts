import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonumentosController } from './monumentos/monumentos.controller';
import { MonumentosService } from './services/monumentos/monumentos.service';
import { MonumentosModule } from './monumentos/monumentos.module';

@Module({
  imports: [MonumentosModule],
  controllers: [AppController, MonumentosController],
  providers: [AppService, MonumentosService],
})
export class AppModule {}

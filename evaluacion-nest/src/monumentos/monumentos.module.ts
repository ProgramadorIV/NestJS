/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MonumentosService } from './monumentos.service';
import { MonumentosController } from './monumentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Monumento } from './entities/monumento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monumento])],
  controllers: [MonumentosController],
  providers: [MonumentosService]
})
export class MonumentosModule {}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Monumento } from './entities/monumento.entity';

@Injectable()
export class MonumentosService extends TypeOrmCrudService<Monumento>{

  constructor(@InjectRepository(Monumento) repo){
    super(repo)
  }
}

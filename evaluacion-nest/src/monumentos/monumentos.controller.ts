/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonumentosService } from './monumentos.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Crud, CrudController } from '@nestjsx/crud';
import { Monumento } from './entities/monumento.entity';

@Crud({
  model: {
    type: Monumento
  }
})
@Controller('monumentos')
export class MonumentosController implements CrudController<Monumento> {

  constructor(public service: MonumentosService) {}

}

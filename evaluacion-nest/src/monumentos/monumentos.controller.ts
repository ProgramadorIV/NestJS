/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MonumentosService } from './monumentos.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';

@Controller('monumentos')
export class MonumentosController {
  constructor(private readonly monumentosService: MonumentosService) {}

  @Post()
  create(@Body() createMonumentoDto: CreateMonumentoDto) {
    return this.monumentosService.create(createMonumentoDto);
  }

  @Get()
  findAll() {
    return this.monumentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monumentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonumentoDto: UpdateMonumentoDto) {
    return this.monumentosService.update(+id, updateMonumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monumentosService.remove(+id);
  }
}

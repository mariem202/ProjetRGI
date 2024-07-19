import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssicclassminService } from './pssicclassmin.service';
import { CreatePssicclassminDto } from './dto/create-pssicclassmin.dto';
import { UpdatePssicclassminDto } from './dto/update-pssicclassmin.dto';

@Controller('pssicclassmin')
export class PssicclassminController {
  constructor(private readonly pssicclassminService: PssicclassminService) {}

  @Post()
  create(@Body() createPssicclassminDto: CreatePssicclassminDto) {
    return this.pssicclassminService.create(createPssicclassminDto);
  }

  @Get()
  findAll() {
    return this.pssicclassminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssicclassminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssicclassminDto: UpdatePssicclassminDto) {
    return this.pssicclassminService.update(+id, updatePssicclassminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssicclassminService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssinclService } from './pssincl.service';
import { CreatePssinclDto } from './dto/create-pssincl.dto';
import { UpdatePssinclDto } from './dto/update-pssincl.dto';

@Controller('pssincl')
export class PssinclController {
  constructor(private readonly pssinclService: PssinclService) {}

  @Post()
  create(@Body() createPssinclDto: CreatePssinclDto) {
    return this.pssinclService.create(createPssinclDto);
  }

  @Get()
  findAll() {
    return this.pssinclService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssinclService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssinclDto: UpdatePssinclDto) {
    return this.pssinclService.update(+id, updatePssinclDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssinclService.remove(+id);
  }
}

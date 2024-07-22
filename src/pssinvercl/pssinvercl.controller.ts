import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssinverclService } from './pssinvercl.service';
import { CreatePssinverclDto } from './dto/create-pssinvercl.dto';
import { UpdatePssinverclDto } from './dto/update-pssinvercl.dto';

@Controller('pssinvercl')
export class PssinverclController {
  constructor(private readonly pssinverclService: PssinverclService) {}

  @Post()
  create(@Body() createPssinverclDto: CreatePssinverclDto) {
    return this.pssinverclService.create(createPssinverclDto);
  }

  @Get()
  findAll() {
    return this.pssinverclService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssinverclService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssinverclDto: UpdatePssinverclDto) {
    return this.pssinverclService.update(+id, updatePssinverclDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssinverclService.remove(+id);
  }
}

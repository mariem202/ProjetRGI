import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssinclsetService } from './pssinclset.service';
import { CreatePssinclsetDto } from './dto/create-pssinclset.dto';
import { UpdatePssinclsetDto } from './dto/update-pssinclset.dto';

@Controller('pssinclset')
export class PssinclsetController {
  constructor(private readonly pssinclsetService: PssinclsetService) {}

  @Post()
  create(@Body() createPssinclsetDto: CreatePssinclsetDto) {
    return this.pssinclsetService.create(createPssinclsetDto);
  }

  @Get()
  findAll() {
    return this.pssinclsetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssinclsetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssinclsetDto: UpdatePssinclsetDto) {
    return this.pssinclsetService.update(+id, updatePssinclsetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssinclsetService.remove(+id);
  }
}

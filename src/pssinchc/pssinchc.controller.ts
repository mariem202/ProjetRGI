import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssinchcService } from './pssinchc.service';
import { CreatePssinchcDto } from './dto/create-pssinchc.dto';
import { UpdatePssinchcDto } from './dto/update-pssinchc.dto';

@Controller('pssinchc')
export class PssinchcController {
  constructor(private readonly pssinchcService: PssinchcService) {}

  @Post()
  create(@Body() createPssinchcDto: CreatePssinchcDto) {
    return this.pssinchcService.create(createPssinchcDto);
  }

  @Get()
  findAll() {
    return this.pssinchcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssinchcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssinchcDto: UpdatePssinchcDto) {
    return this.pssinchcService.update(+id, updatePssinchcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssinchcService.remove(+id);
  }
}

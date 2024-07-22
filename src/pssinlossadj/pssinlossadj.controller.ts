import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssinlossadjService } from './pssinlossadj.service';
import { CreatePssinlossadjDto } from './dto/create-pssinlossadj.dto';
import { UpdatePssinlossadjDto } from './dto/update-pssinlossadj.dto';

@Controller('pssinlossadj')
export class PssinlossadjController {
  constructor(private readonly pssinlossadjService: PssinlossadjService) {}

  @Post()
  create(@Body() createPssinlossadjDto: CreatePssinlossadjDto) {
    return this.pssinlossadjService.create(createPssinlossadjDto);
  }

  @Get()
  findAll() {
    return this.pssinlossadjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssinlossadjService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssinlossadjDto: UpdatePssinlossadjDto) {
    return this.pssinlossadjService.update(+id, updatePssinlossadjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssinlossadjService.remove(+id);
  }
}

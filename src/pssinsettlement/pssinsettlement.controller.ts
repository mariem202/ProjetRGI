import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PssinsettlementService } from './pssinsettlement.service';
import { CreatePssinsettlementDto } from './dto/create-pssinsettlement.dto';
import { UpdatePssinsettlementDto } from './dto/update-pssinsettlement.dto';

@Controller('pssinsettlement')
export class PssinsettlementController {
  constructor(private readonly pssinsettlementService: PssinsettlementService) {}

  @Post()
  create(@Body() createPssinsettlementDto: CreatePssinsettlementDto) {
    return this.pssinsettlementService.create(createPssinsettlementDto);
  }

  @Get()
  findAll() {
    return this.pssinsettlementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pssinsettlementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePssinsettlementDto: UpdatePssinsettlementDto) {
    return this.pssinsettlementService.update(+id, updatePssinsettlementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pssinsettlementService.remove(+id);
  }
}

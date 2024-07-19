import { Injectable } from '@nestjs/common';
import { CreatePssicclassminDto } from './dto/create-pssicclassmin.dto';
import { UpdatePssicclassminDto } from './dto/update-pssicclassmin.dto';

@Injectable()
export class PssicclassminService {
  create(createPssicclassminDto: CreatePssicclassminDto) {
    return 'This action adds a new pssicclassmin';
  }

  findAll() {
    return `This action returns all pssicclassmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pssicclassmin`;
  }

  update(id: number, updatePssicclassminDto: UpdatePssicclassminDto) {
    return `This action updates a #${id} pssicclassmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssicclassmin`;
  }
}

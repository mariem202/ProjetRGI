import { Injectable } from '@nestjs/common';
import { CreatePssicclassminDto } from './dto/create-pssicclassmin.dto';
import { UpdatePssicclassminDto } from './dto/update-pssicclassmin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pssicclassmin } from 'src/entities/Pssicclassmin';
import { Repository } from 'typeorm';

@Injectable()
export class PssicclassminService {

   constructor(
    @InjectRepository(Pssicclassmin)
    private readonly PssicclassminRepository: Repository<Pssicclassmin>,
  ) {}
  create(createPssicclassminDto: CreatePssicclassminDto) {
    return 'This action adds a new pssicclassmin';
  }

  findAll() {
    return this.PssicclassminRepository.find();
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

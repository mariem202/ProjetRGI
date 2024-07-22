import { Injectable } from '@nestjs/common';
import { CreatePssinchcDto } from './dto/create-pssinchc.dto';
import { UpdatePssinchcDto } from './dto/update-pssinchc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pssinchc } from 'src/entities/Pssinchc';

@Injectable()
export class PssinchcService {
   constructor(
    @InjectRepository(Pssinchc)
    private readonly PssinchcRepository: Repository<Pssinchc>,
  ) {} 
  create(createPssinchcDto: CreatePssinchcDto) {
    return 'This action adds a new pssinchc';
  }

  findAll() {
    return this.PssinchcRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pssinchc`;
  }

  update(id: number, updatePssinchcDto: UpdatePssinchcDto) {
    return `This action updates a #${id} pssinchc`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssinchc`;
  }
}

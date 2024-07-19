import { Injectable } from '@nestjs/common';
import { CreatePssinclDto } from './dto/create-pssincl.dto';
import { UpdatePssinclDto } from './dto/update-pssincl.dto';
import { Pssincl } from './entities/pssincl.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PssinclService {
 constructor(
    @InjectRepository(Pssincl)
    private readonly userRepository: Repository<Pssincl>,
  ) {}

  create(createPssinclDto: CreatePssinclDto) {
    return 'This action adds a new pssincl';
  }

  findAll(): Promise<Pssincl[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pssincl`;
  }

  update(id: number, updatePssinclDto: UpdatePssinclDto) {
    return `This action updates a #${id} pssincl`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssincl`;
  }
}

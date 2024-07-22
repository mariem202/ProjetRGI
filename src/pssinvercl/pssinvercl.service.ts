import { Injectable } from '@nestjs/common';
import { CreatePssinverclDto } from './dto/create-pssinvercl.dto';
import { UpdatePssinverclDto } from './dto/update-pssinvercl.dto';
import { Pssinvercl } from 'src/entities/Pssinvercl';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PssinverclService {
  constructor(
    @InjectRepository(Pssinvercl)
    private readonly PssinverclRepository: Repository<Pssinvercl>,
  ) {}
  create(createPssinverclDto: CreatePssinverclDto) {
    return 'This action adds a new pssinvercl';
  }

  findAll() {
    return this.PssinverclRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pssinvercl`;
  }

  update(id: number, updatePssinverclDto: UpdatePssinverclDto) {
    return `This action updates a #${id} pssinvercl`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssinvercl`;
  }
}

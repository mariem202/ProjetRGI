import { Injectable } from '@nestjs/common';
import { CreatePssinlossadjDto } from './dto/create-pssinlossadj.dto';
import { UpdatePssinlossadjDto } from './dto/update-pssinlossadj.dto';
import { Pssinlossadj } from 'src/entities/Pssinlossadj';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PssinlossadjService {
  constructor(
    @InjectRepository(Pssinlossadj)
    private readonly PssinlossadjRepository: Repository<Pssinlossadj>,
  ) {}
  create(createPssinlossadjDto: CreatePssinlossadjDto) {
    return 'This action adds a new pssinlossadj';
  }

  findAll() {
    return this.PssinlossadjRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pssinlossadj`;
  }

  update(id: number, updatePssinlossadjDto: UpdatePssinlossadjDto) {
    return `This action updates a #${id} pssinlossadj`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssinlossadj`;
  }
}

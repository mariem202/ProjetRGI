import { Injectable } from '@nestjs/common';
import { CreatePssinclsetDto } from './dto/create-pssinclset.dto';
import { UpdatePssinclsetDto } from './dto/update-pssinclset.dto';
import { Pssinclset } from 'src/entities/Pssinclset';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PssinclsetService {
  constructor(
    @InjectRepository(Pssinclset)
    private readonly PssinclsetRepository: Repository<Pssinclset>,
  ) {}
  create(createPssinclsetDto: CreatePssinclsetDto) {
    return 'This action adds a new pssinclset';
  }

  findAll() {
    return this.PssinclsetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pssinclset`;
  }

  update(id: number, updatePssinclsetDto: UpdatePssinclsetDto) {
    return `This action updates a #${id} pssinclset`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssinclset`;
  }
}

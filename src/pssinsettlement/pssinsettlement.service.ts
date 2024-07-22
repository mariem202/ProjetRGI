import { Injectable } from '@nestjs/common';
import { CreatePssinsettlementDto } from './dto/create-pssinsettlement.dto';
import { UpdatePssinsettlementDto } from './dto/update-pssinsettlement.dto';
import { Pssinsettlement } from 'src/entities/Pssinsettlement';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PssinsettlementService {
  constructor(
    @InjectRepository(Pssinsettlement)
    private readonly PssinclsetRepository: Repository<Pssinsettlement>,
  ) {}
  create(createPssinsettlementDto: CreatePssinsettlementDto) {
    return 'This action adds a new pssinsettlement';
  }

  findAll() {
    return this.PssinclsetRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} pssinsettlement`;
  }

  update(id: number, updatePssinsettlementDto: UpdatePssinsettlementDto) {
    return `This action updates a #${id} pssinsettlement`;
  }

  remove(id: number) {
    return `This action removes a #${id} pssinsettlement`;
  }
}

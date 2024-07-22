import { Module } from '@nestjs/common';
import { PssinsettlementService } from './pssinsettlement.service';
import { PssinsettlementController } from './pssinsettlement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pssinsettlement } from 'src/entities/Pssinsettlement';

@Module({
  imports: [TypeOrmModule.forFeature([Pssinsettlement])],
  controllers: [PssinsettlementController],
  providers: [PssinsettlementService],
})
export class PssinsettlementModule {}

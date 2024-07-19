import { Module } from '@nestjs/common';
import { PssinclService } from './pssincl.service';
import { PssinclController } from './pssincl.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pssincl } from 'src/entities/Pssincl';

@Module({
  imports: [TypeOrmModule.forFeature([Pssincl])],
  controllers: [PssinclController],
  providers: [PssinclService],
})
export class PssinclModule {}

import { Module } from '@nestjs/common';
import { PssinlossadjService } from './pssinlossadj.service';
import { PssinlossadjController } from './pssinlossadj.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pssinlossadj } from 'src/entities/Pssinlossadj';

@Module({
  imports: [TypeOrmModule.forFeature([Pssinlossadj])],
  controllers: [PssinlossadjController],
  providers: [PssinlossadjService],
})
export class PssinlossadjModule {}

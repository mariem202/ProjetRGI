import { Module } from '@nestjs/common';
import { PssinchcService } from './pssinchc.service';
import { PssinchcController } from './pssinchc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pssinchc } from 'src/entities/Pssinchc';

@Module({
  imports: [TypeOrmModule.forFeature([Pssinchc])],
  controllers: [PssinchcController],
  providers: [PssinchcService],
})
export class PssinchcModule {}

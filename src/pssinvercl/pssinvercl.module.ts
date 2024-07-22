import { Module } from '@nestjs/common';
import { PssinverclService } from './pssinvercl.service';
import { PssinverclController } from './pssinvercl.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pssinvercl } from 'src/entities/Pssinvercl';

@Module({
  imports: [TypeOrmModule.forFeature([Pssinvercl])],
  controllers: [PssinverclController],
  providers: [PssinverclService],
})
export class PssinverclModule {}

import { Module } from '@nestjs/common';
import { PssicclassminService } from './pssicclassmin.service';
import { PssicclassminController } from './pssicclassmin.controller';
import { Pssicclassmin } from 'src/entities/Pssicclassmin';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pssicclassmin])],
  controllers: [PssicclassminController],
  providers: [PssicclassminService],
})
export class PssicclassminModule {}

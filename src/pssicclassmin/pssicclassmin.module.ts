import { Module } from '@nestjs/common';
import { PssicclassminService } from './pssicclassmin.service';
import { PssicclassminController } from './pssicclassmin.controller';

@Module({
  controllers: [PssicclassminController],
  providers: [PssicclassminService],
})
export class PssicclassminModule {}

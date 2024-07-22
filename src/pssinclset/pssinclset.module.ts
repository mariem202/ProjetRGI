import { Module } from '@nestjs/common';
import { PssinclsetService } from './pssinclset.service';
import { PssinclsetController } from './pssinclset.controller';
import { Pssinclset } from 'src/entities/Pssinclset';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pssinclset])],
  controllers: [PssinclsetController],
  providers: [PssinclsetService],
})
export class PssinclsetModule {}

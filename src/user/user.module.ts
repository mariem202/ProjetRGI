import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Puuser } from 'src/entities/Puuser';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Puuser])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // Ajoutez cette ligne pour exporter UserService

})
export class UserModule {}

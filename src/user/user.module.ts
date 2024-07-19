import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Puuser } from 'src/entities/Puuser';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Puuser])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

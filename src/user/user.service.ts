import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Puuser } from 'src/entities/Puuser';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt'; // Importer bcryptjs
import { createHash } from 'crypto'; // Importer la bibliothèque crypto pour MD5



@Injectable()
export class UserService {
    constructor(
    @InjectRepository(Puuser)
    private readonly userRepository: Repository<Puuser>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Promise<Puuser[]> {
    return this.userRepository.find();
  }

  findOne(username: string) {
    return  this.userRepository.findOne({ where: { cname: username } });
  }
  
  async validateUser(
    username: string,
    password: string,
  ): Promise<Puuser | null> {
    const user = await this.userRepository.findOne({
      where: { cname: username },
    });

    if (user) {
      // Convertir le mot de passe en clair en hachage MD5
      const hashedPassword = createHash('md5')
        .update(password)
        .digest('hex')
        .toUpperCase();

      if (user.cpwd === hashedPassword) {
        return user;
      }
    }
    return null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

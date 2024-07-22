import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { createHash } from 'crypto';
import { Puuser } from 'src/entities/Puuser';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}


  async validateUser(username: string, password: string): Promise<Partial<Puuser>> {
    const user = await this.userService.validateUser(username, password);
  
    if (user) {
      const { cpwd, ...result } = user;
      console.log('res',result)
      return result;
    }
    return null;
  }


  async login(user: Puuser) {
    const payload = { username: user.cname, sub: user.iduser };
    console.log('res',payload)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}

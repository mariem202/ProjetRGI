// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBa/HH1Q3+kRoJqNiXMZTU0dhWI6gL9IKiGmqTFtw7VnNLl35Fw9T0FxTLZuSKl3vHYPo5fM/iMCziOkHJRVbR9EAAwyIYxWvyHQYVbr7+YAMXgygdwFiTXig65SLo06dOme81JRc8NfMIzv3ZXwOCaNp22+FjadzQTHP1RPTA5Dm3uxk=', // Utilisez la même clé secrète que précédemment
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

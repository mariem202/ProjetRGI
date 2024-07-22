import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBa/HH1Q3+kRoJqNiXMZTU0dhWI6gL9IKiGmqTFtw7VnNLl35Fw9T0FxTLZuSKl3vHYPo5fM/iMCziOkHJRVbR9EAAwyIYxWvyHQYVbr7+YAMXgygdwFiTXig65SLo06dOme81JRc8NfMIzv3ZXwOCaNp22+FjadzQTHP1RPTA5Dm3uxk=', // Utilisez la même clé secrète que précédemment
      signOptions: { expiresIn: '60m' }, // Le token expire en 60 minutes
    }),
    UserModule
  ],
  providers: [AuthService,LocalStrategy, JwtStrategy ],
  controllers: [AuthController]
})
export class AuthModule {}

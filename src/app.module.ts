import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Puuser } from "./entities/Puuser";
import { Pssincl } from "./entities/Pssincl";
import { Pssicclassmin } from "./entities/Pssicclassmin";
import { Pssinchc } from './entities/Pssinchc';
import { Pssinclset } from "./entities/Pssinclset";
import { Pssinlossadj } from './entities/Pssinlossadj';
import { Pssinsettlement } from './entities/Pssinsettlement';
import { Pssinvercl } from './entities/Pssinvercl';
import { AppController } from './app.controller';
import { SinistreController } from './sinistre/sinistre.controller';
import { AppService } from './app.service';
import { SinistresService } from './sinistres/sinistres.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PssinclModule } from './pssincl/pssincl.module';
import { PssinclController } from './pssincl/pssincl.controller';
import { PssinclService } from './pssincl/pssincl.service';
import { UserModule } from './user/user.module';
import { PssicclassminModule } from './pssicclassmin/pssicclassmin.module';
import { PssinchcModule } from './pssinchc/pssinchc.module';
import { PssinclsetModule } from './pssinclset/pssinclset.module';
import { PssinlossadjModule } from './pssinlossadj/pssinlossadj.module';
import { PssinsettlementModule } from './pssinsettlement/pssinsettlement.module';
import { PssinverclModule } from './pssinvercl/pssinvercl.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'rgidb',
      entities: [
        Puuser,
        Pssincl,
        Pssicclassmin,
        Pssinchc,
        Pssinclset,
        Pssinlossadj,
        Pssinsettlement,
        Pssinvercl,
        __dirname + '/**/*.entity{.ts,.js}',
      ], // Ajoutez vos entités ici
      synchronize: true, // À désactiver en production,
      driver: require('mysql2'),
    }),
    PssinclModule,
    UserModule,
    PssicclassminModule,
    PssinchcModule,
    PssinclsetModule,
    PssinlossadjModule,
    PssinsettlementModule,
    PssinverclModule,
    JwtModule.register({
      secret: 'MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBa/HH1Q3+kRoJqNiXMZTU0dhWI6gL9IKiGmqTFtw7VnNLl35Fw9T0FxTLZuSKl3vHYPo5fM/iMCziOkHJRVbR9EAAwyIYxWvyHQYVbr7+YAMXgygdwFiTXig65SLo06dOme81JRc8NfMIzv3ZXwOCaNp22+FjadzQTHP1RPTA5Dm3uxk=', // Utilisez la même clé secrète que précédemment
      signOptions: { expiresIn: '60m' },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

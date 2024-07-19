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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

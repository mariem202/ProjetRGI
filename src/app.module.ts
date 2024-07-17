import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SinistreController } from './sinistre/sinistre.controller';

@Module({
  imports: [],
  controllers: [AppController, SinistreController],
  providers: [AppService],
})
export class AppModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://ashishkalsariyaquantumbot:XErincm3ApFZDL2Q@nestdemo.zgnkwot.mongodb.net/?retryWrites=true&w=majority&appName=nestDemo'),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

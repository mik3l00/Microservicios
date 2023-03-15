import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModule } from './flight/flight.module';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath:['.env.development'], isGlobal:true
  }), MongooseModule.forRoot(process.env.URI_MONGO) ,FlightModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
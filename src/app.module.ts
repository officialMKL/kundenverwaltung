import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KundenModule } from './kunden/kunden.module';

@Module({
  imports: [KundenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

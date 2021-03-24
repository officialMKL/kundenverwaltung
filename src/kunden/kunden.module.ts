import { Module } from '@nestjs/common';
import { KundenController } from './kunden.controller';
import { KundenService } from './kunden.service';

@Module({
  controllers: [KundenController],
  providers: [KundenService]
})
export class KundenModule {}

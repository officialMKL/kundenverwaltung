import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { KundenService } from 'src/kunden/kunden.service';
import { KundeDto } from 'src/kunden/model/kunde-dto';

@Controller('kunden')
export class KundenController {
  private readonly logger = new Logger(KundenController.name);
  constructor(private kundenService: KundenService) {}
  @Get(':id')
  getKunde(@Param('id') id: number) {
    this.logger.debug('get Kunde');
    return this.kundenService.getKunde(id);
  }

  @Get()
  getKunden() {
    this.logger.debug('get Kunden');
    return this.kundenService.getKunden();
  }

  @Post()
  createKunde(@Body() kunde: KundeDto) {
    this.logger.debug('create Kunde');
    return this.kundenService.createKunde(kunde);
  }
}

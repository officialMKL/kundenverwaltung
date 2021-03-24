import { Injectable, Logger } from '@nestjs/common';
import { KundeDto } from 'src/kunden/model/kunde-dto';

@Injectable()
export class KundenService {
  private readonly logger = new Logger(KundenService.name);
  private kunden: KundeDto[] = [];
  idSeq = 1;

  getKunde(id: number) {
    return this.kunden.find((kunde) => kunde.id == id);
  }

  getKunden() {
    return this.kunden;
  }

  createKunde(kunde: KundeDto) {
    kunde.id = this.idSeq;
    this.idSeq++;
    this.kunden.push(kunde);
    return kunde;
  }
}

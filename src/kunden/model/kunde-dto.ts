import { AdresseDto } from "src/kunden/model/adresse-dto";
import { ProjektDto } from "src/kunden/model/projekt-dto";

export class KundeDto {
  id: number;
  name: string;
  branche: string;
  adresse: AdresseDto;
  projekte: ProjektDto[] = [];
}

import { Test, TestingModule } from '@nestjs/testing';
import { KundenController } from './kunden.controller';

describe('KundenController', () => {
  let controller: KundenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KundenController],
    }).compile();

    controller = module.get<KundenController>(KundenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

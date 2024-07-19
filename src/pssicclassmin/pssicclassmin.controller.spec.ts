import { Test, TestingModule } from '@nestjs/testing';
import { PssicclassminController } from './pssicclassmin.controller';
import { PssicclassminService } from './pssicclassmin.service';

describe('PssicclassminController', () => {
  let controller: PssicclassminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssicclassminController],
      providers: [PssicclassminService],
    }).compile();

    controller = module.get<PssicclassminController>(PssicclassminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

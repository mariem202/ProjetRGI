import { Test, TestingModule } from '@nestjs/testing';
import { PssinsettlementController } from './pssinsettlement.controller';
import { PssinsettlementService } from './pssinsettlement.service';

describe('PssinsettlementController', () => {
  let controller: PssinsettlementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssinsettlementController],
      providers: [PssinsettlementService],
    }).compile();

    controller = module.get<PssinsettlementController>(PssinsettlementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

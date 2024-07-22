import { Test, TestingModule } from '@nestjs/testing';
import { PssinsettlementService } from './pssinsettlement.service';

describe('PssinsettlementService', () => {
  let service: PssinsettlementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssinsettlementService],
    }).compile();

    service = module.get<PssinsettlementService>(PssinsettlementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

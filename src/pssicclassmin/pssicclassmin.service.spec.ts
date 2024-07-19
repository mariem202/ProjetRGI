import { Test, TestingModule } from '@nestjs/testing';
import { PssicclassminService } from './pssicclassmin.service';

describe('PssicclassminService', () => {
  let service: PssicclassminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssicclassminService],
    }).compile();

    service = module.get<PssicclassminService>(PssicclassminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

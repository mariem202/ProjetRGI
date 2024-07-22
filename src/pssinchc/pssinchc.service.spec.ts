import { Test, TestingModule } from '@nestjs/testing';
import { PssinchcService } from './pssinchc.service';

describe('PssinchcService', () => {
  let service: PssinchcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssinchcService],
    }).compile();

    service = module.get<PssinchcService>(PssinchcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

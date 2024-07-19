import { Test, TestingModule } from '@nestjs/testing';
import { PssinclService } from './pssincl.service';

describe('PssinclService', () => {
  let service: PssinclService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssinclService],
    }).compile();

    service = module.get<PssinclService>(PssinclService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

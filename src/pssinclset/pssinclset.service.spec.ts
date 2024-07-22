import { Test, TestingModule } from '@nestjs/testing';
import { PssinclsetService } from './pssinclset.service';

describe('PssinclsetService', () => {
  let service: PssinclsetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssinclsetService],
    }).compile();

    service = module.get<PssinclsetService>(PssinclsetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

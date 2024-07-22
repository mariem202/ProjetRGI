import { Test, TestingModule } from '@nestjs/testing';
import { PssinverclService } from './pssinvercl.service';

describe('PssinverclService', () => {
  let service: PssinverclService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssinverclService],
    }).compile();

    service = module.get<PssinverclService>(PssinverclService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

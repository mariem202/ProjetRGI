import { Test, TestingModule } from '@nestjs/testing';
import { PssinlossadjService } from './pssinlossadj.service';

describe('PssinlossadjService', () => {
  let service: PssinlossadjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PssinlossadjService],
    }).compile();

    service = module.get<PssinlossadjService>(PssinlossadjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

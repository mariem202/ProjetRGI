import { Test, TestingModule } from '@nestjs/testing';
import { PssinlossadjController } from './pssinlossadj.controller';
import { PssinlossadjService } from './pssinlossadj.service';

describe('PssinlossadjController', () => {
  let controller: PssinlossadjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssinlossadjController],
      providers: [PssinlossadjService],
    }).compile();

    controller = module.get<PssinlossadjController>(PssinlossadjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

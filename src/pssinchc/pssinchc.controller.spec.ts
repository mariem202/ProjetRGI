import { Test, TestingModule } from '@nestjs/testing';
import { PssinchcController } from './pssinchc.controller';
import { PssinchcService } from './pssinchc.service';

describe('PssinchcController', () => {
  let controller: PssinchcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssinchcController],
      providers: [PssinchcService],
    }).compile();

    controller = module.get<PssinchcController>(PssinchcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PssinverclController } from './pssinvercl.controller';
import { PssinverclService } from './pssinvercl.service';

describe('PssinverclController', () => {
  let controller: PssinverclController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssinverclController],
      providers: [PssinverclService],
    }).compile();

    controller = module.get<PssinverclController>(PssinverclController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PssinclController } from './pssincl.controller';
import { PssinclService } from './pssincl.service';

describe('PssinclController', () => {
  let controller: PssinclController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssinclController],
      providers: [PssinclService],
    }).compile();

    controller = module.get<PssinclController>(PssinclController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

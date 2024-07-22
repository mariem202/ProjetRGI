import { Test, TestingModule } from '@nestjs/testing';
import { PssinclsetController } from './pssinclset.controller';
import { PssinclsetService } from './pssinclset.service';

describe('PssinclsetController', () => {
  let controller: PssinclsetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PssinclsetController],
      providers: [PssinclsetService],
    }).compile();

    controller = module.get<PssinclsetController>(PssinclsetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BottompressureController } from './bottompressure.controller';
import { BottompressureService } from './bottompressure.service';

describe('BottompressureController', () => {
  let controller: BottompressureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BottompressureController],
      providers: [BottompressureService],
    }).compile();

    controller = module.get<BottompressureController>(BottompressureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

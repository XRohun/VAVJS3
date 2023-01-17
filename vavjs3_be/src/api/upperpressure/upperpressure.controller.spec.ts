import { Test, TestingModule } from '@nestjs/testing';
import { UpperpressureController } from './upperpressure.controller';
import { UpperpressureService } from './upperpressure.service';

describe('UpperpressureController', () => {
  let controller: UpperpressureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpperpressureController],
      providers: [UpperpressureService],
    }).compile();

    controller = module.get<UpperpressureController>(UpperpressureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

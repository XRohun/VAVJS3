import { Test, TestingModule } from '@nestjs/testing';
import { UpperpressureService } from './upperpressure.service';

describe('UpperpressureService', () => {
  let service: UpperpressureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpperpressureService],
    }).compile();

    service = module.get<UpperpressureService>(UpperpressureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

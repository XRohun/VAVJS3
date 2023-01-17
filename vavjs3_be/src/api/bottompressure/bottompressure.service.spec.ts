import { Test, TestingModule } from '@nestjs/testing';
import { BottompressureService } from './bottompressure.service';

describe('BottompressureService', () => {
  let service: BottompressureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BottompressureService],
    }).compile();

    service = module.get<BottompressureService>(BottompressureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

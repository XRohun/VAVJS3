import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUpperpressureDto } from './dto/create-upperpressure.dto';
import { UpdateUpperpressureDto } from './dto/update-upperpressure.dto';
import { Upperpressure } from './entities/upperpressure.entity';

@Injectable()
export class UpperpressureService {
  @InjectRepository(Upperpressure)
  private readonly repository: Repository<Upperpressure>;

  create(createUpperpressureDto: CreateUpperpressureDto, id: number) {
    return this.repository.save({
      activityId: id,
      value: createUpperpressureDto.upperpressure,
      date: createUpperpressureDto.date,
    });
  }

  findAll(id: number) {
    return this.repository.find({ where: { activityId: id } });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}

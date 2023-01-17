import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWeightDto } from './dto/create-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';
import { Weight } from './entities/weight.entity';

@Injectable()
export class WeightService {
  @InjectRepository(Weight)
  private readonly repository: Repository<Weight>;

  create(createWeightDto: CreateWeightDto, id: number) {
    return this.repository.save({
      activityId: id,
      value: createWeightDto.weight,
      date: createWeightDto.date,
    });
  }

  findAll(id: number) {
    return this.repository.find({ where: { activityId: id } });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}

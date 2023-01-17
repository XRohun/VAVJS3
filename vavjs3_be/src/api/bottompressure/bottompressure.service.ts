import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBottompressureDto } from './dto/create-bottompressure.dto';
import { UpdateBottompressureDto } from './dto/update-bottompressure.dto';
import { Bottompressure } from './entities/bottompressure.entity';

@Injectable()
export class BottompressureService {
  @InjectRepository(Bottompressure)
  private readonly repository: Repository<Bottompressure>;

  create(createBottompressureDto: CreateBottompressureDto, id: number) {
    return this.repository.save({
      activityId: id,
      value: createBottompressureDto.bottompressure,
      date: createBottompressureDto.date,
    });
  }

  findAll(id: number) {
    return this.repository.find({ where: { activityId: id } });
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bottompressure } from '../bottompressure/entities/bottompressure.entity';
import { Upperpressure } from '../upperpressure/entities/upperpressure.entity';
import { Weight } from '../weight/entities/weight.entity';
import { CreateMethodDto } from './dto/create-method.dto';
import { UpdateMethodDto } from './dto/update-method.dto';
import { Method } from './entities/method.entity';

@Injectable()
export class MethodService {
  @InjectRepository(Method)
  private readonly repository: Repository<Method>;
  @InjectRepository(Upperpressure)
  private readonly repositoryW: Repository<Upperpressure>;
  @InjectRepository(Bottompressure)
  private readonly repositoryU: Repository<Bottompressure>;
  @InjectRepository(Weight)
  private readonly repositoryB: Repository<Weight>;

  async create(createMethodDto: CreateMethodDto, id: string) {
    const res = await this.repository.save({
      userId: parseInt(id),
      value: createMethodDto.activityName,
    });
    return res;
  }

  async findAll(id: string) {
    return await this.repository.find({ where: { userId: parseInt(id) } });
  }

  async getMeasurements(id: number) {
    const weight = await this.repositoryB.find({
      where: { activityId: id },
    });
    const upperpressure = await this.repositoryU.find({
      where: { activityId: id },
    });
    const bottompressure = await this.repositoryW.find({
      where: { activityId: id },
    });
    return { weight, upperpressure, bottompressure };
  }
}

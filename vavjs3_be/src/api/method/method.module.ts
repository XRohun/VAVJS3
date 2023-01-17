import { Module } from '@nestjs/common';
import { MethodService } from './method.service';
import { MethodController } from './method.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Method } from './entities/method.entity';
import { Upperpressure } from '../upperpressure/entities/upperpressure.entity';
import { Bottompressure } from '../bottompressure/entities/bottompressure.entity';
import { Weight } from '../weight/entities/weight.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Method, Upperpressure, Bottompressure, Weight]),
  ],
  controllers: [MethodController],
  providers: [MethodService],
})
export class MethodModule {}

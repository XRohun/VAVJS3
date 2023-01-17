import { Module } from '@nestjs/common';
import { UpperpressureService } from './upperpressure.service';
import { UpperpressureController } from './upperpressure.controller';
import { Upperpressure } from './entities/upperpressure.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Upperpressure])],
  controllers: [UpperpressureController],
  providers: [UpperpressureService],
})
export class UpperpressureModule {}

import { Module } from '@nestjs/common';
import { BottompressureService } from './bottompressure.service';
import { BottompressureController } from './bottompressure.controller';
import { Bottompressure } from './entities/bottompressure.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Bottompressure])],
  controllers: [BottompressureController],
  providers: [BottompressureService],
})
export class BottompressureModule {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UpperpressureService } from './upperpressure.service';
import { CreateUpperpressureDto } from './dto/create-upperpressure.dto';
import { UpdateUpperpressureDto } from './dto/update-upperpressure.dto';
import { Upperpressure } from './entities/upperpressure.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('upperpressure')
export class UpperpressureController {
  constructor(private readonly upperpressureService: UpperpressureService) {}

  @Post(':id')
  create(
    @Body() createUpperpressureDto: CreateUpperpressureDto,
    @Param('id') id: number,
  ) {
    return this.upperpressureService.create(createUpperpressureDto, id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.upperpressureService.findAll(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.upperpressureService.remove(id);
  }
}

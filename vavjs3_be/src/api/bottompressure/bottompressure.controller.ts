import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BottompressureService } from './bottompressure.service';
import { CreateBottompressureDto } from './dto/create-bottompressure.dto';
import { UpdateBottompressureDto } from './dto/update-bottompressure.dto';
import { Bottompressure } from './entities/bottompressure.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('bottompressure')
export class BottompressureController {
  constructor(private readonly bottompressureService: BottompressureService) {}

  @Post(':id')
  create(
    @Body() createBottompressureDto: CreateBottompressureDto,
    @Param('id') id: number,
  ) {
    return this.bottompressureService.create(createBottompressureDto, id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bottompressureService.findAll(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.bottompressureService.remove(id);
  }
}

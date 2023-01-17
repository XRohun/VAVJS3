import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeightService } from './weight.service';
import { CreateWeightDto } from './dto/create-weight.dto';
import { UpdateWeightDto } from './dto/update-weight.dto';

@Controller('weight')
export class WeightController {
  constructor(private readonly weightService: WeightService) {}

  @Post(':id')
  async create(
    @Body() createWeightDto: CreateWeightDto,
    @Param('id') id: number,
  ) {
    const res = await this.weightService.create(createWeightDto, id);
    return res;
  }

  @Get(':id')
  findAll(@Param('id') id: number) {
    return this.weightService.findAll(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.weightService.remove(id);
  }
}

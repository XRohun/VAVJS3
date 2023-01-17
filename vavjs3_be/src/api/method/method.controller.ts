import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MethodService } from './method.service';
import { CreateMethodDto } from './dto/create-method.dto';
import { UpdateMethodDto } from './dto/update-method.dto';

@Controller('method')
export class MethodController {
  constructor(private readonly methodService: MethodService) {}

  @Post('/:id')
  async create(
    @Body() createMethodDto: CreateMethodDto,
    @Param('id') id: string,
  ) {
    return await this.methodService.create(createMethodDto, id);
  }

  @Get('/:id')
  findAll(@Param('id') id: string) {
    return this.methodService.findAll(id);
  }

  @Get('/measurements/:id')
  async getMeasurements(@Param('id') id: number) {
    return await this.methodService.getMeasurements(id);
  }
}

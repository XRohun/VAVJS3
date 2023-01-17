import { Body, Controller, Get, Post } from '@nestjs/common';
import { UpdateAdvertisementDto } from './advertisement.dto';
import { AdvertisementService } from './advertisement.service';

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Get()
  async findAll() {
    return await this.advertisementService.findFirst();
  }

  @Get('/restart')
  async restartCounter() {
    return await this.advertisementService.restartCounter();
  }

  @Get('/click')
  async click() {
    return await this.advertisementService.click();
  }

  @Post()
  async update(@Body() body: UpdateAdvertisementDto) {
    return await this.advertisementService.updateFirst(body);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateAdvertisementDto } from './advertisement.dto';
import { Advertisement } from './advertisement.entity';

@Injectable()
export class AdvertisementService {
  @InjectRepository(Advertisement)
  private readonly repository: Repository<Advertisement>;

  async findFirst() {
    const ad = await this.repository.findOne({ where: { id: 1 } });
    if (ad) {
      return ad;
    } else {
      const newAd = new Advertisement();
      newAd.adUrl = 'https://reactjs.org/docs/getting-started.html';
      newAd.adImageUrl =
        'https://vedanadosah.cvtisr.sk/wp-content/uploads/importovane/img/articles/njSc7meJ.jpg';
      newAd.adCount = 0;
      return this.repository.save(newAd);
    }
  }

  async updateFirst(body: UpdateAdvertisementDto) {
    const updated = await this.repository.save({
      id: 1,
      adUrl: body.adUrl,
      adImageUrl: body.adImageUrl,
      adCount: body.adCount,
    });
    return updated;
  }

  async restartCounter() {
    const ad = await this.repository.findOne({ where: { id: 1 } });
    if (ad) {
      ad.adCount = 0;
      return this.repository.save(ad);
    }
  }

  async click() {
    const ad = await this.repository.findOne({ where: { id: 1 } });
    if (ad) {
      ad.adCount++;
      return this.repository.save(ad);
    }
  }
}

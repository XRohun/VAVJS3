import { Module } from '@nestjs/common';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { BottompressureModule } from './bottompressure/bottompressure.module';
import { MethodModule } from './method/method.module';
import { UpperpressureModule } from './upperpressure/upperpressure.module';
import { UserModule } from './user/user.module';
import { WeightModule } from './weight/weight.module';

@Module({
  imports: [
    UserModule,
    AdvertisementModule,
    WeightModule,
    BottompressureModule,
    UpperpressureModule,
    MethodModule,
  ],
})
export class ApiModule {}

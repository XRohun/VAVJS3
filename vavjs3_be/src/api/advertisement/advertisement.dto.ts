import { IsNumber, IsString } from 'class-validator';

export class UpdateAdvertisementDto {
  @IsString()
  adUrl: string;

  @IsString()
  adImageUrl: string;

  @IsNumber()
  adCount: number;
}

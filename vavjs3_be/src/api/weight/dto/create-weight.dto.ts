import { IsNumber, IsString } from 'class-validator';

export class CreateWeightDto {
  @IsNumber()
  weight: number;

  @IsString()
  date: string;

  @IsString()
  activityId: string;
}

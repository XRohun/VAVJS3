import { IsNumber, IsString } from 'class-validator';

export class CreateUpperpressureDto {
  @IsNumber()
  upperpressure: number;

  @IsString()
  date: string;
}

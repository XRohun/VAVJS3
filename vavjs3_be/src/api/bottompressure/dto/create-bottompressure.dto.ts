import { IsNumber, IsString } from 'class-validator';

export class CreateBottompressureDto {
  @IsNumber()
  bottompressure: number;

  @IsString()
  date: string;
}

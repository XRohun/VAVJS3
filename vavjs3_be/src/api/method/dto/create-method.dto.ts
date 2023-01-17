import { IsNumber, IsString } from 'class-validator';

export class CreateMethodDto {
  @IsString()
  activityName: string;
}

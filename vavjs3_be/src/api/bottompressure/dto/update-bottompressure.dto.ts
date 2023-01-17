import { PartialType } from '@nestjs/mapped-types';
import { CreateBottompressureDto } from './create-bottompressure.dto';

export class UpdateBottompressureDto extends PartialType(CreateBottompressureDto) {}

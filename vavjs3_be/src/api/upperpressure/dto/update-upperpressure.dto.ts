import { PartialType } from '@nestjs/mapped-types';
import { CreateUpperpressureDto } from './create-upperpressure.dto';

export class UpdateUpperpressureDto extends PartialType(CreateUpperpressureDto) {}

import { PartialType } from '@nestjs/swagger';
import CreateAppartmentDto from './create-appartment.dto';

export class UpdateAppartmentDto extends PartialType(CreateAppartmentDto) {}

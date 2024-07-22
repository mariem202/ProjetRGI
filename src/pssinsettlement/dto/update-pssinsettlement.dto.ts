import { PartialType } from '@nestjs/mapped-types';
import { CreatePssinsettlementDto } from './create-pssinsettlement.dto';

export class UpdatePssinsettlementDto extends PartialType(CreatePssinsettlementDto) {}

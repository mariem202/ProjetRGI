import { PartialType } from '@nestjs/mapped-types';
import { CreatePssicclassminDto } from './create-pssicclassmin.dto';

export class UpdatePssicclassminDto extends PartialType(CreatePssicclassminDto) {}

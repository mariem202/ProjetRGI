import { PartialType } from '@nestjs/mapped-types';
import { CreatePssinclDto } from './create-pssincl.dto';

export class UpdatePssinclDto extends PartialType(CreatePssinclDto) {}

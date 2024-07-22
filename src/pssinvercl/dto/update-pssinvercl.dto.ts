import { PartialType } from '@nestjs/mapped-types';
import { CreatePssinverclDto } from './create-pssinvercl.dto';

export class UpdatePssinverclDto extends PartialType(CreatePssinverclDto) {}

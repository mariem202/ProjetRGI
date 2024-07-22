import { PartialType } from '@nestjs/mapped-types';
import { CreatePssinclsetDto } from './create-pssinclset.dto';

export class UpdatePssinclsetDto extends PartialType(CreatePssinclsetDto) {}

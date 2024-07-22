import { PartialType } from '@nestjs/mapped-types';
import { CreatePssinchcDto } from './create-pssinchc.dto';

export class UpdatePssinchcDto extends PartialType(CreatePssinchcDto) {}

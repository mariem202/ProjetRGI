import { PartialType } from '@nestjs/mapped-types';
import { CreatePssinlossadjDto } from './create-pssinlossadj.dto';

export class UpdatePssinlossadjDto extends PartialType(CreatePssinlossadjDto) {}

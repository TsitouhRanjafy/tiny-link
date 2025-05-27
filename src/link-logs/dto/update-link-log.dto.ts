import { PartialType } from '@nestjs/mapped-types';
import { CreateLinkLogDto } from './create-link-log.dto';

export class UpdateLinkLogDto extends PartialType(CreateLinkLogDto) {}

import { OmitType } from '@nestjs/mapped-types';
import { PublicUserDto } from 'src/module/users/dto/create-user.dto';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsUrl,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class LinkDto {
  @IsInt()
  @Min(0)
  id: number;

  @IsUrl()
  @MaxLength(2 ** 16, {
    message: 'originLink is too long',
  })
  originLink: string;

  @MinLength(1, {
    message: 'Minimum of tinylink is 1',
  })
  @MaxLength(2 ** 8, {
    message: 'Maximum of tinylink is 65 535',
  })
  tinyLink: string;

  @IsOptional()
  @IsBoolean()
  actived!: boolean;

  @IsBoolean()
  @IsOptional()
  secured!: boolean;

  @IsBoolean()
  @IsOptional()
  protected!: boolean;

  @MaxLength(2 ** 8, {
    message: '$target is too long',
  })
  @IsOptional()
  key!: string;

  user: PublicUserDto;
}

export class CreateLinkDto extends OmitType(LinkDto, ['id'] as const) {}

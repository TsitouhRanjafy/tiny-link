import { OmitType, PickType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsInt,
  IsString,
  IsStrongPassword,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Link } from 'src/module/links/entities/link.entity';

export class UserDto {
  @IsInt()
  @Min(0)
  id: number;

  @IsString()
  @MinLength(2, {
    message: '$target is too short. Minimal length is $constraint1 characters',
  })
  @MaxLength(2 ** 8, {
    message: '$target is too long. Miximal length is $constraint1 characters',
  })
  fullname: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class CreateUserDto extends OmitType(UserDto, ['id'] as const) {}

export class LoginUserDto extends PickType(UserDto, [
  'email',
  'password',
] as const) {}

export class PublicUserDto extends OmitType(UserDto, ['password'] as const) {}

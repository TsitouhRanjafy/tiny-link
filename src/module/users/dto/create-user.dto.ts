import { OmitType, PickType } from "@nestjs/mapped-types";

export class UserDto {
    id: number;
    fullname: string;
    email: string;
    password: string;
}

export class CreateUserDto extends OmitType(UserDto,['id'] as const) {}

export class LoginUserDto extends PickType(UserDto,['email','password'] as const) {}

export class PublicUserDto extends OmitType(UserDto,['password'] as const) {}


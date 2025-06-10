import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateUserDto,
  LoginUserDto,
  UserDto,
} from 'src/module/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginUserDto) {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto);
  }
}

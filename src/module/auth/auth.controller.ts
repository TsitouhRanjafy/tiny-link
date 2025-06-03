import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/module/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Omit<CreateUserDto,"fullname">){
        return this.authService.signIn(signInDto);
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signUp(@Body() signUpDto: Omit<CreateUserDto,"id">){
        return this.authService.signUp(signUpDto);
    }
}

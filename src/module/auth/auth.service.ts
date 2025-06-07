import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/common/hash/hash.service';
import { UserDto, LoginUserDto, CreateUserDto } from 'src/module/users/dto/create-user.dto';
import { UsersService } from 'src/module/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private hashService: HashService
    ){}

    async signIn(currentUser: LoginUserDto): Promise<{access_token: string}>{
        const user: UserDto | null = await this.usersService.findOneByEmail(currentUser.email);
        if (!user) throw new UnauthorizedException;

        const isPasswordMatched: boolean = await this.hashService.compared(currentUser.password,user.password)
        if (!isPasswordMatched) throw new UnauthorizedException;
        const payload = { sub: user.id, fullname: user.fullname }
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

    async signUp(user: CreateUserDto){
        const IsUserExistAlready: UserDto | null = await this.usersService.findOneByEmail(user.email)
        if (IsUserExistAlready) return; // thow
        const password = await this.hashService.hash(user.password);
        return this.usersService.create({...user, password});
    }
}

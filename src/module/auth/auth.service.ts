import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'src/common/hash/hash.service';
import { CreateUserDto } from 'src/module/users/dto/create-user.dto';
import { UsersService } from 'src/module/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private hashService: HashService
    ){}

    async signIn(currentUser: Omit<CreateUserDto,"fullname">){
        const user: CreateUserDto | null = await this.usersService.findOneByEmail(currentUser.email);
        if (user?.password !== currentUser.password) {
            throw new UnauthorizedException;
        }
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        return result;
    }

    async signUp(user: Omit<CreateUserDto,"id">){
        const IsUserExistAlready: CreateUserDto | null = await this.usersService.findOneByEmail(user.email)
        if (IsUserExistAlready) return; // thow
        const password = await this.hashService.hash(user.password);
        return this.usersService.create({...user, password});
    }
}

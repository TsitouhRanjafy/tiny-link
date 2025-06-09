import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ENDPOINTS } from 'src/constants/endpoint';
import { JwtService } from '@nestjs/jwt';
import { AuthGuardService } from '../auth/guard/auth-guard.service';
import { RoleGuardService } from '../auth/guard/role-guard.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get(ENDPOINTS.GETALL)
  @UseGuards(RoleGuardService)
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuardService)
  @Get(ENDPOINTS.GETONE+"/:id")
  findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Get(ENDPOINTS.GETONE)
  @UseGuards(AuthGuardService)
  findOneByEmail(@Query('email') email: string){
    return this.usersService.findOneByEmail(email);
  }

  @UseGuards(AuthGuardService)
  @Patch(ENDPOINTS.UPDATEONE+"/:id")
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuardService)
  @Delete(ENDPOINTS.DELETEONE+"/:id")
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

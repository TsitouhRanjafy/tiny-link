import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ENDPOINTS } from 'src/constants/endpoint';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Middleware for admin
  @Get(ENDPOINTS.GETALL)
  findAll() {
    return this.usersService.findAll();
  }

  // Middleware for auth user
  @Get(ENDPOINTS.GETONE+"/:id")
  findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Get(ENDPOINTS.GETONE)
  findOneByEmail(@Query('email') email: string){
    return this.usersService.findOneByEmail(email);
  }

  // Middleware for auth user
  @Patch(ENDPOINTS.UPDATEONE+"/:id")
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // Middleware for auth user
  @Delete(ENDPOINTS.DELETEONE+"/:id")
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

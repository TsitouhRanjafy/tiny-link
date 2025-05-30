import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ENDPOINTS } from 'src/constants/endpoint';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(ENDPOINTS.CREATE)
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get(ENDPOINTS.GETALL)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(ENDPOINTS.GETONE)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(ENDPOINTS.UPDATEONE)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(ENDPOINTS.DELETEONE)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

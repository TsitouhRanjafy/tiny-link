import { 
  Controller, 
  Get,  
  Body, 
  Patch,  
  Delete, 
  Query, 
  UseGuards, 
  Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ENDPOINTS } from 'src/constants/endpoint';
import { AuthGuardService } from '../auth/guard/auth-guard.service';
import { RoleGuardService } from '../auth/guard/role-guard.service';
import { User } from 'src/common/decorators/user.decorator';

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
  @Get(ENDPOINTS.GETONE)
  findOneById(@User() user: any) {
    return this.usersService.findOneById(user.id);
  }

  @UseGuards(AuthGuardService)
  @Patch(ENDPOINTS.UPDATEONE)
  update(@User() user: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }

  @UseGuards(AuthGuardService)
  @Delete(ENDPOINTS.DELETEONE)
  remove(@User() user: any) {
    return this.usersService.remove(user.id);
  }
}

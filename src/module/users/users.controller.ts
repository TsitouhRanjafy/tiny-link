import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuardService } from '../auth/guard/auth-guard.service';
import { User } from 'src/common/decorators/user.decorator';

@Controller('users')
@UseGuards(AuthGuardService)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/profile')
  findOneById(@User() user: any) {
    return this.usersService.findOneById(user.id);
  }

  @Patch('/update')
  update(@User() user: any, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(user.id, updateUserDto);
  }

  @Delete('/delete/me')
  remove(@User() user: any) {
    return this.usersService.remove(user.id);
  }
}

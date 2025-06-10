import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { ENDPOINTS } from 'src/constants/endpoint';
import { AuthGuardService } from '../auth/guard/auth-guard.service';
import { User } from 'src/common/decorators/user.decorator';

@UseGuards(AuthGuardService)
@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post(ENDPOINTS.CREATE)
  create(@Body() createLinkDto: CreateLinkDto, @User() user: any) {
    return this.linksService.create(createLinkDto, user.id);
  }

  @Get(ENDPOINTS.GETALL)
  findAll(@User() user: any) {
    return this.linksService.findManyByUserId(user.id);
  }

  @Get(ENDPOINTS.GETONE + '/:id')
  findOne(@Param('id') id: string, @User() user: any) {
    return this.linksService.findOne(+id, user.id);
  }

  // @Patch(ENDPOINTS.UPDATEONE)
  // update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
  //   return this.linksService.update(+id, updateLinkDto);
  // }

  @Delete(ENDPOINTS.DELETEONE + '/:tinylink')
  removeOne(@Param('tinylink') tinylink: string, @User() user: any) {
    return this.linksService.removeOneByTinylink(tinylink, user.id);
  }
}

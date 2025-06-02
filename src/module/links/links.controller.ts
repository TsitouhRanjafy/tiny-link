import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { ENDPOINTS } from 'src/constants/endpoint';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post(ENDPOINTS.CREATE)
  create(@Body() createLinkDto: CreateLinkDto) {
    return this.linksService.create(createLinkDto);
  }

  @Get(ENDPOINTS.GETALL)
  findAll() {
    return this.linksService.findAll();
  }

  @Get(ENDPOINTS.GETONE)
  findOne(@Param('id') id: string) {
    return this.linksService.findOne(+id);
  }

  @Patch(ENDPOINTS.UPDATEONE)
  update(@Param('id') id: string, @Body() updateLinkDto: UpdateLinkDto) {
    return this.linksService.update(+id, updateLinkDto);
  }

  @Delete(ENDPOINTS.DELETEONE)
  remove(@Param('id') id: string) {
    return this.linksService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkLogsService } from './link-logs.service';
import { CreateLinkLogDto } from './dto/create-link-log.dto';
import { UpdateLinkLogDto } from './dto/update-link-log.dto';
import { ENDPOINTS } from 'src/constants/endpoint';

@Controller('link-logs')
export class LinkLogsController {
  constructor(private readonly linkLogsService: LinkLogsService) {}

  @Post(ENDPOINTS.CREATE)
  create(@Body() createLinkLogDto: CreateLinkLogDto) {
    return this.linkLogsService.create(createLinkLogDto);
  }

  @Get(ENDPOINTS.GETALL)
  findAll() {
    return this.linkLogsService.findAll();
  }

  @Get(ENDPOINTS.GETONE)
  findOne(@Param('id') id: string) {
    return this.linkLogsService.findOne(+id);
  }

  @Patch(ENDPOINTS.UPDATEONE)
  update(@Param('id') id: string, @Body() updateLinkLogDto: UpdateLinkLogDto) {
    return this.linkLogsService.update(+id, updateLinkLogDto);
  }

  @Delete(ENDPOINTS.DELETEONE)
  remove(@Param('id') id: string) {
    return this.linkLogsService.remove(+id);
  }
}

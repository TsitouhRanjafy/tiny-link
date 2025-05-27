import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LinkLogsService } from './link-logs.service';
import { CreateLinkLogDto } from './dto/create-link-log.dto';
import { UpdateLinkLogDto } from './dto/update-link-log.dto';

@Controller('link-logs')
export class LinkLogsController {
  constructor(private readonly linkLogsService: LinkLogsService) {}

  @Post()
  create(@Body() createLinkLogDto: CreateLinkLogDto) {
    return this.linkLogsService.create(createLinkLogDto);
  }

  @Get()
  findAll() {
    return this.linkLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLinkLogDto: UpdateLinkLogDto) {
    return this.linkLogsService.update(+id, updateLinkLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkLogsService.remove(+id);
  }
}

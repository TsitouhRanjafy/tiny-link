import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { ENDPOINTS } from 'src/constants/endpoint';

@Controller('visitor')
export class VisitorController {
  constructor(private readonly visitorService: VisitorService) {}

  @Post(ENDPOINTS.CREATE)
  create(@Body() createVisitorDto: CreateVisitorDto) {
    return this.visitorService.create(createVisitorDto);
  }

  @Get(ENDPOINTS.GETALL)
  findAll() {
    return this.visitorService.findAll();
  }

  @Get(ENDPOINTS.GETONE)
  findOne(@Param('id') id: string) {
    return this.visitorService.findOne(+id);
  }

  @Patch(ENDPOINTS.UPDATEONE)
  update(@Param('id') id: string, @Body() updateVisitorDto: UpdateVisitorDto) {
    return this.visitorService.update(+id, updateVisitorDto);
  }

  @Delete(ENDPOINTS.DELETEONE)
  remove(@Param('id') id: string) {
    return this.visitorService.remove(+id);
  }
}

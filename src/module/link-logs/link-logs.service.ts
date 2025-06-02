import { Injectable } from '@nestjs/common';
import { CreateLinkLogDto } from './dto/create-link-log.dto';
import { UpdateLinkLogDto } from './dto/update-link-log.dto';

@Injectable()
export class LinkLogsService {
  create(createLinkLogDto: CreateLinkLogDto) {
    return 'This action adds a new linkLog';
  }

  findAll() {
    return `This action returns all linkLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkLog`;
  }

  update(id: number, updateLinkLogDto: UpdateLinkLogDto) {
    return `This action updates a #${id} linkLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkLog`;
  }
}

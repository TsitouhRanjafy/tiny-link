import { Module } from '@nestjs/common';
import { LinkLogsService } from './link-logs.service';
import { LinkLogsController } from './link-logs.controller';

@Module({
  controllers: [LinkLogsController],
  providers: [LinkLogsService],
})
export class LinkLogsModule {}

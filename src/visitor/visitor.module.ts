import { Module } from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { VisitorController } from './visitor.controller';

@Module({
  controllers: [VisitorController],
  providers: [VisitorService],
})
export class VisitorModule {}

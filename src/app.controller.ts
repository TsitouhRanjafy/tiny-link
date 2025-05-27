import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}

  @Get("/:tinylink")
  tinyLink(@Param('tinylink') tinyLink: string): string {
    return `this action will redirect to http://localhost:4200/${tinyLink}`;
  }
}

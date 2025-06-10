import {
  Controller,
  Get,
  Param,
  Redirect,
  HttpRedirectResponse,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:tinylink')
  @Redirect()
  async tinyLink(
    @Param('tinylink') tinyLink: string,
  ): Promise<HttpRedirectResponse> {
    const link = await this.appService.getTinyLink(tinyLink);

    // tracker here

    return {
      statusCode: 302,
      url: link,
    };
  }
}

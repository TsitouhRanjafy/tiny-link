import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Controller()
export class AppController {
  constructor(
    @Inject(CACHE_MANAGER) 
    private readonly cacheManager: Cache,
    private readonly appService: AppService
  ) {}

  @Get("/tinylink")
  async tinyLink(@Param('tinylink') tinyLink: string): Promise<string> {
    const value = await this.cacheManager.get('tinylink');
    return `this action will redirect to http://localhost:4200/${value}`;
  }

  @Post("/:tinylink")
  async createCache(@Param('tinylink') tinylink: string ) {
    console.log(tinylink);
    const value = await this.cacheManager.set('tinylink',tinylink);
    return value;
  }
}
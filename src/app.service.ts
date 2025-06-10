import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { link } from 'fs';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getTinyLink(name: string) {
    const tinyLink: string | null = await this.cacheManager.get(name);

    if (tinyLink) return tinyLink;
    throw new NotFoundException('Not found link');
  }
}

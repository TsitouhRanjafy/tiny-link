import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { createKeyv } from '@keyv/redis';
import { Keyv } from "keyv"
import { CacheableMemory } from 'cacheable';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        CacheModule.registerAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                return {
                    stores: [
                        new Keyv({
                            store: new CacheableMemory({lruSize: 5000 }),
                        }),
                        createKeyv(configService.getOrThrow<string>('REDIS_DB'))
                    ]
                };
            },
            isGlobal: true
        }),
    ],
    exports: [CacheModule]
})
export class AppCacheModule {}

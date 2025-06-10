import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { linksProviders } from './links.providers';
import { DatabaseModule } from 'src/database/database.module';
import { AuthGuardModule } from '../auth/guard/auth-guard.module';
import { UsersModule } from '../users/users.module';
import { AppCacheModule } from 'src/cache/caching.module';

@Module({
  imports: [
    DatabaseModule,
    AuthGuardModule,
    UsersModule,
    AppCacheModule
  ],
  controllers: [LinksController],
  providers: [...linksProviders,LinksService],
})
export class LinksModule {}

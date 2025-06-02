import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { VisitorModule } from './visitor/visitor.module';
import { LinkLogsModule } from './link-logs/link-logs.module';

import { AuthMiddleware } from './middleware/auth.middleware';
import { AppCacheModule } from './cache/caching.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    AppCacheModule,
    UsersModule,
    LinksModule,
    VisitorModule,
    LinkLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes('links')
  }
}

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { UsersModule } from './module/users/users.module';
import { LinksModule } from './module/links/links.module';
import { VisitorModule } from './module/visitor/visitor.module';
import { LinkLogsModule } from './module/link-logs/link-logs.module';
import { AuthModule } from './module/auth/auth.module';

import { AuthMiddleware } from './middleware/auth.middleware';
import { AppCacheModule } from './cache/caching.module';
import { HashService } from './common/service/hash.service';


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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes('links')
  }
}

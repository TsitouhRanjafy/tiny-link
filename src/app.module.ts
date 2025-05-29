import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { VisitorModule } from './visitor/visitor.module';
import { LinkLogsModule } from './link-logs/link-logs.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    UsersModule,
    LinksModule,
    VisitorModule,
    LinkLogsModule,
    RedisModule,
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

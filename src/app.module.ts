import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { VisitorModule } from './visitor/visitor.module';
import { LinkLogsModule } from './link-logs/link-logs.module';

@Module({
  imports: [
    UsersModule,
    LinksModule,
    VisitorModule,
    LinkLogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

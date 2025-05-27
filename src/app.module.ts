import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
import { VisitorModule } from './visitor/visitor.module';

@Module({
  imports: [
    UsersModule,
    LinksModule,
    VisitorModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

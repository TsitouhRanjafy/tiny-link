import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from './users.providers';
import { AuthGuardModule } from '../auth/guard/auth-guard.module';
import { RoleGuardModule } from '../auth/guard/role-guard.module';

@Module({
  imports: [
    DatabaseModule, 
    AuthGuardModule,
    RoleGuardModule
  ],  
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
  ],
  exports: [UsersService]
})
export class UsersModule {}

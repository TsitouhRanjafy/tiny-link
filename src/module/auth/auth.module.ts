import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { HashModule } from 'src/common/hash/hash.module';

@Module({
  imports: [UsersModule,JwtModule,HashModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

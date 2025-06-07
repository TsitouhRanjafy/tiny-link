import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { HashModule } from 'src/common/hash/hash.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT_KEYSECRET_JWT_KEY,
      signOptions: { expiresIn: '24h' }
    }),
    HashModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

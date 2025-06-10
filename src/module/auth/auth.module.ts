import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { HashModule } from 'src/common/hash/hash.module';

@Module({
  imports: [
    UsersModule,
    HashModule,
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

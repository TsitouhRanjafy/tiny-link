import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuardService } from './auth-guard.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthGuardService],
  exports: [AuthGuardService, JwtModule],
})
export class AuthGuardModule {}

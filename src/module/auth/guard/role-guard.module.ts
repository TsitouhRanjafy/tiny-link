import { Module } from '@nestjs/common';
import { RoleGuardService } from './role-guard.service';

@Module({
  imports: [],
  providers: [RoleGuardService],
  exports: [RoleGuardService],
})
export class RoleGuardModule {}

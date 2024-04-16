import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [TaskModule, UsersModule, ProjectsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}

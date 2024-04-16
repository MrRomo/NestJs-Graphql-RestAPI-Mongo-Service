import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TaskModule,
    UsersModule,
    ProjectsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}

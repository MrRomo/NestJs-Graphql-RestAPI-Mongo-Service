import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();
@Module({
  imports: [
    TaskModule,
    UsersModule,
    ProjectsModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}

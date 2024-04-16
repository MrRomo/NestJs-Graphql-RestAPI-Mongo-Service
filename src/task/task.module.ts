import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(TaskController);
  }
}

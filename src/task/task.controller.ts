import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { IGetTaskDto } from './dto/get-task.dto';
import { ValidateTaskPipe } from './validate-task/validate-task.pipe';
import { AuthGuard } from './guard/auth/auth.guard';
import { LoggerMiddleware } from './logger/logger.middleware';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get('/:id')
  getTask(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.getTask(id);
  }

  @Get('/')
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'title', required: false })
  @UseGuards(AuthGuard)
  getAllTasks(@Query(ValidateTaskPipe) query: IGetTaskDto) {
    return this.taskService.getTasks(query);
  }

  @Post('/')
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put('/:id')
  updateTask(
    @Body() task: UpdateTaskDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.taskService.updateTask(id, task);
  }

  @Patch('/')
  updateTaskStatus() {
    return this.taskService.patchTask();
  }

  @Delete('/')
  deleteTask() {
    return this.taskService.deleteTask();
  }
}

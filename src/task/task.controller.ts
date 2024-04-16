import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Get('/')
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post('/')
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put('/:id')
  updateTask(@Body() task: UpdateTaskDto, @Param('id') id: string) {
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

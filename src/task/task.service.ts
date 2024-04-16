import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }

  updateTask(id: string, task: UpdateTaskDto) {
    this.tasks = this.tasks.map((t) => {
      if (t.id === id) {
        return { ...t, ...task };
      }
      return t;
    });
    return task;
  }

  patchTask() {
    return 'Task patched';
  }

  deleteTask() {
    return 'Task deleted';
  }
}

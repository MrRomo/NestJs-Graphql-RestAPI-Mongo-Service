import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { IGetTaskDto } from './dto/get-task.dto';

@Injectable()
export class TaskService {
  private tasks = [];

  getTasks(query: IGetTaskDto) {
    console.log('query', query);
    
    const tasks = [];
    if (query.id) {
      tasks.push(this.getTask(query.id));
    }
    return tasks;
  }

  getTask(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(task: CreateTaskDto) {
    this.tasks.push({ ...task, id: this.tasks.length + 1 });
    return task;
  }

  updateTask(id: number, task: UpdateTaskDto) {
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

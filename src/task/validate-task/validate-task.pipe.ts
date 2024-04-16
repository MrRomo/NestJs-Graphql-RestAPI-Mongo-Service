import { HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { GetTaskDto } from '../dto/get-task.dto';

@Injectable()
export class ValidateTaskPipe implements PipeTransform {
  transform(value: GetTaskDto) {
    console.log('value', value);
    value.id = parseInt(value.id.toString());
    if (value.id && isNaN(value.id)) {
      throw new HttpException('Invalid id', 400);
    }

    if (value.title && typeof value.title !== 'string') {
      throw new HttpException('Invalid title', 400);
    }

    if (value.done && typeof value.done !== 'boolean') {
      throw new HttpException('Invalid done', 400);
    }
    return value;
  }
}

import { HttpException, Injectable, PipeTransform } from '@nestjs/common';
import { createFilterObject } from '../filterObject.mongoose';
import { PaginationArgs } from '../page.entity';

@Injectable()
export class ValidateFilterObjectPipe implements PipeTransform {
  transform(value: PaginationArgs) {
    const { filter } = value;

    value.limit = parseInt(value.limit.toString());
    value.page = parseInt(value.page.toString());

    if (isNaN(value.limit))
      throw new HttpException('Limit must be a number', 400);

    if (isNaN(value.page))
      throw new HttpException('Page must be a number', 400);

    if (filter) {
      const filterObject = createFilterObject(filter);
      return { ...value, filter: filterObject };
    } else {
      return { ...value, filter: {} };
    }
  }
}

import { ApiQuery } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetTaskDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;
}

export class IGetTaskDto {
  id: number;
  title?: string;
  description?: string;
  done?: boolean;
}

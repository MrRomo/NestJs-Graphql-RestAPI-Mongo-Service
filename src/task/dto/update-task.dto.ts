import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @ApiProperty()
  title?: string;

  @IsString()
  @ApiProperty()
  description?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  done?: boolean;
}

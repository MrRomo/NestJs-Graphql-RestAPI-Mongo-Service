import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @Field()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @Field()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  @Field()
  @IsOptional()
  password?: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Field()
  @IsOptional()
  age?: number;
}

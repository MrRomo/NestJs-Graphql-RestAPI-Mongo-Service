import { Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Max, Min } from 'class-validator';

export class ListUserDto {
  @ApiProperty({ default: 0, type: Number })
  // @IsNumber()
  // @Min(0)
  @Field({ defaultValue: 0 })
  page: number;

  @ApiProperty({ default: 10, type: Number })
  // @IsNumber()
  // @Field({ defaultValue: 10 })
  // @Max(100)
  limit: number;

  @ApiProperty({ default: '-createdAt' })
  @Field()
  sort?: string;

  @ApiProperty({ required: false })
  @Field({ nullable: true })
  filter?: string;
}

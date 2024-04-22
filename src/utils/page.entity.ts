import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { defaultValue: 0 })
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  limit: number;

  @Field({ nullable: true })
  sort?: string;

  @Field({ nullable: true })
  filter?: string;
}

export interface IPaginationArgs {
  page: number;
  limit: number;
  sort?: string;
  filter?: any;
}

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

export class Page<T> {
  @Field()
  total: number;

  @Field()
  page: number;

  @Field()
  limit: number;

  @Field(() => [Object])
  data: T[];
}

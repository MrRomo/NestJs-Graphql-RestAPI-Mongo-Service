import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GQLUser {
  @Field(Int)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

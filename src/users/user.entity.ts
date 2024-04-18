import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  age: number;
}

@ObjectType()
export class UserList {
  @Field()
  total: number;

  @Field()
  page: number;

  @Field()
  limit: number;

  @Field(() => [User])
  data: User[];
}

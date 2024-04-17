import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput, User } from './user.entity';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  createUser(@Args('User') user: CreateUserInput) {
    return this.userService.createUser(user);
  }
}

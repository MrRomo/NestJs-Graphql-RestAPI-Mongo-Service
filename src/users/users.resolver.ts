import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput, User } from './user.entity';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}
  //GRAPHQL ENDPOINTS FOR USERS - with JWT authentication
  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User)
  getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  createUser(@Args('User') user: CreateUserInput) {
    return this.userService.createUser(user);
  }
}

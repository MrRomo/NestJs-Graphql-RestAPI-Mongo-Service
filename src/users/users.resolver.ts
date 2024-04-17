import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  createUser(user: User) {
    return this.userService.createUser(user);
  }
}

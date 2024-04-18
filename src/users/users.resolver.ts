import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserList } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationArgs } from 'src/utils/page.entity';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) { }
  //GRAPHQL ENDPOINTS FOR USERS - with JWT authentication
  @Query(() => UserList)
  listUsers(@Args() pageArgs: PaginationArgs) {
    return this.userService.listUsers(pageArgs);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User)
  getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  createUser(@Args('User') user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: string, @Args('User') user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }

  @Mutation(() => User)
  deleteUser(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}

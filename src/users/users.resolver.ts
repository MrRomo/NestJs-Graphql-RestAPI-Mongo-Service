import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, UserList } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationArgs } from 'src/utils/page.entity';
import { ValidateFilterObjectPipe } from 'src/utils/validate-filter-object/validate-filter-object.pipe';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) { }
  // GRAPHQL ENDPOINTS FOR USERS - with JWT authentication
  @Query(() => UserList)
  listUsers(@Args(ValidateFilterObjectPipe) pageArgs: PaginationArgs) {
    return this.userService.listUsers(pageArgs);
  }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
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

  @Mutation(() => String, { nullable: true })
  async deleteUser(@Args('id') id: string) {
    const result = await this.userService.deleteUser(id);
    if (result) {
      return 'User deleted successfully';
    }
    return null;
  }
}

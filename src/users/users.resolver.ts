import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { GQLUser } from './user.entity';
import { Public } from 'src/auth/auth.decorator';

@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [GQLUser])
    return this.userService.gqlGetUsers();
  }

  @Mutation(() => GQLUser)
  createUser(user: GQLUser) {
    return this.userService.gqlCreateUser(user);
  }
}

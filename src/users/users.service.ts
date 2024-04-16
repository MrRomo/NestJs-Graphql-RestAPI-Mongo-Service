import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push({ ...user, id: this.users.length + 1 });
    return user;
  }
}

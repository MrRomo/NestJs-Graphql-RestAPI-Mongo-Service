import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { GQLUser } from './user.entity';
import { Query } from '@nestjs/graphql';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getUsers() {
    return this.userModel.find().exec();
  }

  async gqlGetUsers(): Promise<GQLUser[]> {
    const users = await this.userModel.find().exec();
    return users.map((user) => {
      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        password: user.password,
      };
    });
  }

  async gqlCreateUser(user: GQLUser): Promise<GQLUser> {
    const createdUser = new this.userModel(user);
    const savedUser = await createdUser.save({ validateBeforeSave: true });
    return {
      id: savedUser._id.toString(),
      name: savedUser.name,
      email: savedUser.email,
      password: savedUser.password,
    };
  }

  createUser(user: CreateUserDto) {
    const createdUser = new this.userModel(user);
    return createdUser.save({ validateBeforeSave: true });
  }
}

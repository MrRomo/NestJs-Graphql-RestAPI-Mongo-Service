import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  createUser(user: CreateUserDto) {
    const createdUser = new this.userModel(user);
    return createdUser.save({ validateBeforeSave: true });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { PaginationArgs } from 'src/utils/page.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async listUsers({ limit, page, sort }: PaginationArgs) {
    const results = await this.userModel
      .find()
      .skip(page * limit)
      .sort(sort || '-createdAt')
      .limit(limit)
      .exec();
    return {
      total: await this.userModel.countDocuments().exec(),
      page,
      limit,
      data: results,
    };
  }

  getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  getUserById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  createUser(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save({ validateBeforeSave: true });
  }

  updateUser(id: string, user: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}

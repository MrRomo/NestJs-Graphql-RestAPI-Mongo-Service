import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { Public } from 'src/auth/auth.decorator';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  @Public()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('/')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}

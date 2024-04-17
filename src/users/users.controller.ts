import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) { }
  //API REST ENDPOINTS FOR USERS - with JWT authentication
  @Get('/')
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post('/')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }
}

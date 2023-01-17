import { Body, Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Post('/login')
  public async loginUser(@Body() body: LoginUserDto) {
    return await this.service.validateUser(body);
  }

  @Post('/register')
  public createUser(@Body() body: CreateUserDto) {
    return this.service.createUser(body);
  }

  @Get('/all')
  public async getAllUsers() {
    return await this.service.getAllUsers();
  }

  @Delete(':id')
  public async deleteUser(id: number) {
    return await this.service.deleteUser(id);
  }
}

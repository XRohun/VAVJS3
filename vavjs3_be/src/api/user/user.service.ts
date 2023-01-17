import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async validateUser(user: LoginUserDto): Promise<User> {
    const existingUser = await this.repository.findOne({
      where: { login: user.login },
    });
    if (existingUser) {
      const isValid = await bcrypt.compare(
        user.password,
        existingUser.password,
      );
      if (isValid) {
        return existingUser;
      }
    }
    throw new Error('Invalid credentials');
  }

  public async seedAdmin(): Promise<User> {
    const user: User = new User();

    //find if user with email admin@admin.com exists
    const existingUser = await this.repository.findOne({
      where: { email: 'admin@admin.com' },
    });

    if (existingUser) {
      return existingUser;
    }

    user.login = 'admin';
    user.password = await bcrypt.hash('admin', 10);
    user.email = 'admin@admin.com';
    user.age = 69;
    user.height = 1337;

    return await this.repository.save(user);
  }

  public async createUser(body: CreateUserDto): Promise<User> {
    if (body.password != body.password2) {
      throw new Error('Passwords do not match');
    }

    const existingUser = await this.repository.findOne({
      where: { email: body.email },
    });

    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const user: User = new User();

    user.email = body.email;
    user.login = body.login;
    user.password = await bcrypt.hash(body.password, 10);
    user.age = body.age;
    user.height = body.height;

    return this.repository.save(user);
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.repository.find();
    return users.map((user) => {
      delete user.password;
      return user;
    });
  }

  public async deleteUser(id: number): Promise<User> {
    const user = await this.repository.findOne({ where: { id } });
    if (user) {
      return this.repository.remove(user);
    }
    throw new Error('User not found');
  }
}

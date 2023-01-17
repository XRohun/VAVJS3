import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public login: string;

  @IsString()
  public password: string;

  @IsString()
  public password2: string;

  @IsEmail()
  public email: string;

  @IsNumber()
  public age: number;

  @IsNumber()
  public height: number;
}

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  public login: string;

  @IsString()
  public password: string;
}

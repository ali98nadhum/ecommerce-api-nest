import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length, MaxLength, MinLength } from 'class-validator';



export class CreateUserDto {
  @IsString({ message: 'Name must be String' })
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  @MaxLength(30, { message: 'Name must be at most 30 characters' })
  name: String;
  @IsString({ message: 'Email must be String' })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email address' })
  email: String;
  @IsString({ message: 'Password must be String' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: String;
  @IsEnum(['user', 'admin'], { message: 'Role must be user or admin' })
  role: String;
  avatar: String;
  @IsNumber({}, { message: 'Age must be a number' })
  age: Number;
  @IsPhoneNumber('IQ', { message: 'Invild phone number' })
  phoneNumber: String;
  @IsString({ message: 'Address must be String' })
  address: String;
  @IsBoolean({ message: 'Actice must br a boolean' })
  @IsEnum([true, false], { message: 'Active must be true or false' })
  active: Boolean;
  @IsString({ message: 'verificationCode must be String' })
  @Length(6, 6 , { message: 'verificationCode must be at least 6 characters' })
  verificationCode: String;
  @IsEnum(["male" , "female"] , {message: "Gender must be male or female"})
  gender: String;
}

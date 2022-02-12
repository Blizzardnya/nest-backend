import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'Email' })
  @IsString({ message: 'Should be a string value' })
  @IsEmail({}, { message: 'This is not email' })
  readonly email: string;

  @ApiProperty({ example: '*password1', description: 'Password' })
  @IsString({ message: 'Should be a string value' })
  @Length(4, 16, { message: 'Shold be not less than 4 and not bigger than 16' })
  readonly password: string;
}

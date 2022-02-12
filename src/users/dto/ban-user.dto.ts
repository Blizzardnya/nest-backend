import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: 'Spam', description: 'Ban reason' })
  @IsString({ message: 'Should be a string value' })
  readonly banReason: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  @IsNumber({}, { message: 'Should be a number value' })
  readonly userId: number;
}

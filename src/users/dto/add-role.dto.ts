import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role' })
  @IsString({ message: 'Should be a string value' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  @IsNumber({}, { message: 'Should be a number value' })
  readonly userId: number;
}

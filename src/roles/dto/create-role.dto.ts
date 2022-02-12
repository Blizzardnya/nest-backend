import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role' })
  @IsString({ message: 'Should be a string value' })
  readonly value: string;

  @ApiProperty({ example: 'Can modify users', description: 'Description' })
  @IsString({ message: 'Should be a string value' })
  readonly description: string;
}

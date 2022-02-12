import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Title text', description: 'Post title' })
  @IsString({ message: 'Should be a string value' })
  readonly title: string;

  @ApiProperty({ example: 'Content text', description: 'Post content' })
  @IsString({ message: 'Should be a string value' })
  readonly content: string;

  @ApiProperty({ example: 1, description: 'Post user ID' })
  readonly userId: number;
}

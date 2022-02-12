import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQHRlc3QuYnkiLCJpZCI6NCwiaWF0IjoxNjQ0NDExMjM2LCJleHAiOjE2NDQ0OTc2MzZ9.WMMKiRqjvYC3GmaS5hspu7HG0uDZC_7XcfG1Ab1SMCA',
    description: 'JWT token',
  })
  readonly token: string;
}

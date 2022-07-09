import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTagDto {
  @ApiProperty({ description: '标签名' })
  @IsNotEmpty()
  tagName: string;
  @ApiProperty({ description: '标签描述', default: '' })
  tagDescription: string;
}

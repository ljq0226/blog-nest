import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty({ description: '标题' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'md格式内容', default: '' })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'html文本内容', default: '' })
  @IsNotEmpty()
  contentHtml: string;

  @ApiProperty({ description: '摘要', default: '' })
  @IsNotEmpty()
  summary: string;

  @ApiProperty({ description: '封面图片', default: '' })
  coverUrl: string;

  @ApiProperty({ description: '阅读数', default: 1 })
  @IsNotEmpty()
  count: string;

  @ApiProperty({ description: '点赞数', default: 1 })
  @IsNotEmpty()
  likeCount: string;

  @ApiProperty({ description: '是否推荐', default: false })
  @IsNotEmpty()
  isRecommend: string;
}

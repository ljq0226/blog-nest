import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
@ApiTags('文章')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @ApiOperation({ summary: '创建文章' })
  @Post('create')
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @ApiOperation({ summary: '获取首页推荐的文章' })
  @Get()
  getRecommend(
    @Param('num') num: number,
    @Param('pageIndex') pageIndex: number,
  ) {
    return this.postService.getRecommend(num, pageIndex);
  }
}

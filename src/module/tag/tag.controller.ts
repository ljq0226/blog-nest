import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
@ApiTags('标签')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @ApiOperation({ summary: '创建新标签' })
  @Post()
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }
  @ApiOperation({ summary: '获取所有标签' })
  @Get()
  findAll() {
    return this.tagService.findAll();
  }
  @ApiOperation({ summary: '通过id获取标签' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(+id);
  }
}

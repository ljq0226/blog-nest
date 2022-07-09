import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '././entities/post.entity';
@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  createPost(postDto) {
    const newPost = this.postRepository.create(postDto);
    return this.postRepository.save(newPost);
  }
  getRecommend(num, pageIndex) {
    console.log(num, pageIndex);
    console.log(
      '----------------------------------------------------------------',
    );
    const posts = this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.tags', 'tags')
      .leftJoinAndSelect('post.category', 'category')
      .leftJoinAndSelect('post.comment', 'comment')
      .skip((pageIndex - 1) * num)
      .take(num)
      .getMany();
    return posts;
  }
}

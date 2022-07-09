import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
@Entity('tag')
export class Tag {
  //tag主键id
  @PrimaryGeneratedColumn()
  tagId: number;

  //标签名字
  @Column({ default: '' })
  tagName: string;
  //标签描述
  @Column({ default: '' })
  tagDescription: string;
  //与post文章多对多关系
  @ManyToMany(() => Post, (post) => post.tags)
  @JoinColumn()
  posts: Post[];
}

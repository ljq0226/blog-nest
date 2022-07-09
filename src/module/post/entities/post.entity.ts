import {
  Entity,
  Column,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  RelationId,
  OneToMany,
} from 'typeorm';
import { Tag } from '../../tag/entities/tag.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { Category } from '../../category/entities/category.entity';
@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  // 文章标题
  @Column({ length: 50 })
  title: string;

  // markdown内容
  @Column({ type: 'mediumtext', default: null })
  content: string;

  // markdown 转 html
  @Column({ type: 'mediumtext', default: null, name: 'content_html' })
  contentHtml: string;

  // 摘要
  @Column({ type: 'text', default: '' })
  summary: string;

  // 封面图
  @Column({ default: '', name: 'cover_url' })
  coverUrl: string;

  // 阅读量
  @Column({ type: 'int', default: 0 })
  count: number;

  // 点赞量
  @Column({ type: 'int', default: 0, name: 'like_count' })
  likeCount: number;

  // 推荐显示
  @Column()
  isRecommend: boolean;

  // 标签
  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({
    name: 'post_tag',
    joinColumn: { name: 'postId' },
    inverseJoinColumn: { name: 'tagId' },
  })
  tags: Tag[];
  //分类
  @ManyToOne(() => Category, (category) => category.posts)
  @JoinColumn()
  category: Category;
  @RelationId((p: Post) => p.category)
  categoryId: number;

  //评论
  @OneToMany(() => Comment, (comment) => comment.post)
  @JoinColumn()
  comment: Comment[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateTime: Date;
}

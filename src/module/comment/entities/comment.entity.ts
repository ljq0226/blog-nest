import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  JoinColumn,
} from 'typeorm';
import User from '../../user/entities/user.entity';
import { Post } from '../../post/entities/post.entity';
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  commentId: number;

  //发表用户ID
  @ManyToOne(() => User, (user) => user.comment)
  @JoinColumn()
  user: User;
  @RelationId((c: Comment) => c.user)
  userId: number;
  //评论文章ID
  @ManyToOne(() => Post, (post) => post.comment)
  @JoinColumn()
  post: Post;
  @RelationId((c: Comment) => c.post)
  postId: number;
  //点赞数
  @Column('int', { default: 0 })
  likeCount: number;
  //评论日期
  @CreateDateColumn()
  createDate: Date;

  //评论内容
  @Column()
  content: string;
  //父评论ID
  @Column()
  fatherCommentId: number;
}

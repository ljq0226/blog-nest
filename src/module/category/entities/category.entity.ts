import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  categoryName: string;

  @Column()
  categoryDescription: string;

  @OneToMany(() => Post, (post) => post.categoryId)
  @JoinColumn()
  posts: Post[];
}

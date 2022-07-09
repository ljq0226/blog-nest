//    posts/posts.entity.ts
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  JoinColumn,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import * as bcrypt from 'bcryptjs';
@Entity('user')
export default class User {
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column({ length: 12 })
  username: string;

  @Exclude() //对返回数据实现过滤password字段
  @Column({ length: 12 })
  password: string;

  @Column()
  avatar: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  @JoinColumn()
  comment: Comment[];

  @CreateDateColumn()
  createdDate: Date;

  //对密码进行加密处理
  @BeforeInsert()
  async encryptPwd() {
    if (!this.password) return;
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}

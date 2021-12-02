import { Craft } from 'src/crafts/entities/craft.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  author: User;

  @Column('text')
  msg: string;

  @ManyToOne(() => Craft)
  craft: Craft;

  @OneToOne(() => Comment)
  reply: Comment;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column()
  disabled: boolean;
}
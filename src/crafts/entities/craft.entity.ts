import { Photo } from 'src/photos/entities/photo.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './category.entity';
import { Material } from './material.entity';

@Entity()
export class Craft {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 128 })
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Material)
  material: Material; 

  @ManyToOne(() => Category)
  category: Category; 

  @ManyToMany(() => Photo)
  @JoinTable()
  photos: Photo[];

  @ManyToOne(() => User)
  author: User;

  @ManyToOne(() => Photo)
  thumbnail: Photo;

  @Column({ type: 'timestamp', default: () => `now()`, nullable: false })
  timestamp?: Date;

  @Column({default: false})
  disabled?: boolean;
}
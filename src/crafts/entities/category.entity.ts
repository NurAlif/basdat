import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  disabled: boolean;
}
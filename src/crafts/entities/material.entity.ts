import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column('text')
  description: string;
}
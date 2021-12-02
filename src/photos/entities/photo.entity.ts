import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  url: string;

  @Column({ length: 256 })
  description: string;
}
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

export enum UserRole {
    ADMIN = "admin",
    VISITOR = "visitor"
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column({ length: 128 })
  email: string;

  @Column({ length: 32 })
  phone: string;

  @Column({ 
    type: "enum",
    enum: UserRole,
    default: UserRole.VISITOR
  })
  role: UserRole;

  @Column({ length: 128 })
  password: string;

  @Column()
  disabled: boolean;
}
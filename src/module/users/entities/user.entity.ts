import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Link } from 'src/module/links/entities/link.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column({
    type: 'varchar',
    length: 254,
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Link, (link) => link.user)
  links: Link[];
}

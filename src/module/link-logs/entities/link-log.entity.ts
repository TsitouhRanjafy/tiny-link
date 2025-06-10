import { Link } from 'src/module/links/entities/link.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LinkLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Link, (link) => link.logs)
  link: Link;
}

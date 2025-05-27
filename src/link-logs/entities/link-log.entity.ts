import { Link } from "src/links/entities/link.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class LinkLog {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @ManyToOne(() => Link, (link) => link.logs)
    link: Link
}

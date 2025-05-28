import { Link } from "src/links/entities/link.entity";
import { Column, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Visitor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ip: string

    @Column({ default: 0 })
    visitNumber: number

    @Column({ default: () => "NOW()" })
    date: Date

    @Column()
    localisation: string

    @Column({ type: "varchar",unique: true })
    mac: string

    @ManyToOne(() => Link, (link) => link.visitors)
    link: Link
}



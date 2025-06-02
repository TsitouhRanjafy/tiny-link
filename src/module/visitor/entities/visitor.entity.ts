import { Link } from "src/module/links/entities/link.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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



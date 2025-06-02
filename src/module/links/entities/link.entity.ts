import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/module/users/entities/user.entity";
import { LinkLog } from "src/module/link-logs/entities/link-log.entity";
import { Visitor } from "src/module/visitor/entities/visitor.entity";

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    originLink: string

    @Column({
        unique: true
    })
    tinyLink: string

    @Column({ type: "boolean", default: true })
    actived: boolean

    @Column({ type: "boolean", default: false })
    secured: boolean

    @Column({ type: "boolean", default: false })
    protected: boolean

    @Column({ default: "" })
    key: string

    @ManyToOne(() => User, (user) => user.links)
    user: User

    @OneToMany(() => LinkLog, (linklog) => linklog.link)
    logs: LinkLog[]

    @OneToMany(() => Visitor,(visitor) => visitor.link)
    visitors: Visitor[]
}



import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { LinkLog } from "src/link-logs/entities/link-log.entity";

@Entity()
export class Link {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    originLink: string

    @Column({
        type: "varchar2",
        unique: true
    })
    tinyLink: string

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
}



import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

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
}



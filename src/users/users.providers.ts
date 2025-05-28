import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

export const usersProviders = [
    {
        provide: 'USERS_REPOSITORY',
        inject: ['DATA_SOURCE'],
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(User)
        }
    }
]
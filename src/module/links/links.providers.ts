import { DataSource } from "typeorm";
import { Link } from "./entities/link.entity";

export const linksProviders = [
    {
        provide: 'LINKS_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Link)
        },
        inject: ['DATA_SOURCE'],
    }
]
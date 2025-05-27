import { DataSource } from "typeorm";


export const databaseProviders = [
    {
        provide: "DATA_SOURCE",
        useFactory: async () => {
            const dataSource = new DataSource({
                type: "postgres",
                host: "dpg-d0qkf0je5dus739l0vog-a",
                port: 5432,
                username: "tsitohaina",
                password: "6DtKmZiZRzMCceFurBYKfqE2qATLCaH2",
                database: "tiny_link",
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true
            });
            
            return dataSource.initialize();
        }
    }
]
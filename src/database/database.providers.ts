import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";


export const databaseProviders = [
    {
        provide: "DATA_SOURCE",
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const dataSource = new DataSource({
                type: configService.getOrThrow<"postgres" | "mysql" | "mongodb" | "oracle">("TYPE"),
                host: configService.getOrThrow<string>('HOST'),
                port: configService.getOrThrow<number>('PORT'),
                username: configService.getOrThrow<string>('USERNAME'),
                password: configService.getOrThrow<string>("PASSWORD"),
                database: configService.getOrThrow<string>('DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true
            });
            
            return dataSource.initialize();
        }
    }
]
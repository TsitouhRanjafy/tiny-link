import { ConfigService } from "@nestjs/config";
import { LinkLog } from "src/link-logs/entities/link-log.entity";
import { Link } from "src/links/entities/link.entity";
import { User } from "src/users/entities/user.entity";
import { Visitor } from "src/visitor/entities/visitor.entity";
import { DataSource } from "typeorm";


export const databaseProviders = [
    {
        provide: "DATA_SOURCE",
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
            const dataSource = new DataSource({
                type: configService.getOrThrow<"postgres" | "mysql">('TYPE'),
                host: configService.getOrThrow<string>('HOST'),
                port: configService.getOrThrow<number>('PORT'),
                username: configService.getOrThrow<string>('USERNAME'),
                password: configService.getOrThrow<string>("PASSWORD"),
                database: configService.getOrThrow<string>('DATABASE'),
                entities: [
                    User,
                    Link,
                    Visitor,
                    LinkLog
                ],
                ssl: {
                    rejectUnauthorized: false
                },
                synchronize: true
            });
            
            return dataSource.initialize();
        }
    }
]
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
    private readonly passsword = process.env.ENCRYPTION_PASSWORD || 'Password used to generate key';
    private readonly algorithm = 'aes-256-ctr'

    async hash(text: string): Promise<string>{
        // à implementer
        return "";
    }

    async compared(textOne: string, textTwo: string): Promise<boolean> {
        // à implementer
        return false;
    }
}

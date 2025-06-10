import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashService {
  async hash(text: string): Promise<string> {
    return await bcrypt.hash(text, 10);
  }

  async compared(textOne: string, textTwo: string): Promise<boolean> {
    return await bcrypt.compare(textOne, textTwo);
  }
}

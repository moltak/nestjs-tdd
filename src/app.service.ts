import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getUser(userId: string): Promise<UserDto> {
    return { id: Number.parseInt(userId, 10) };
  }
}

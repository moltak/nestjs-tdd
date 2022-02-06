import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':userId')
  getUser(@Param('userId') userId: string): UserDto {
    return { id: Number.parseInt(userId, 10) };
  }
}

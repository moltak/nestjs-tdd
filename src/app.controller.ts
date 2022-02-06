import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    throw new Error('Method not implemented.');
  }
}

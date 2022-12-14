import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateBotificationBody) {
    const { recipientId, content, category } = body;
  }
}

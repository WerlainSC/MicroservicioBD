import { Controller, Get } from '@nestjs/common';
import { MailappService } from './mailapp.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailappController {
  constructor(private readonly mailappService: MailappService) {}

  //@Get()
  //getHello(): string {
  //  return this.mailappService.getHello();
  // }
  @EventPattern('new_mail')
  handleNewEmail(data:any){
    console.log('ESTE ES EL EVENTO ENTRANTE',)
  }
}

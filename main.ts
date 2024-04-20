import { NestFactory } from '@nestjs/core';
import { MailappModule } from './mailapp.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'apps/monorepo-nest/src/app.module';

async function bootstrap() {
  //const app = await NestFactory.create(MailappModule);
  //await app.listen(3000);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailappModule,
    {
      transport: Transport.TCP,
    },
  );
      await app.listen();
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT_SERVER ?? 3000,() => {
    console.log(`server running on http://localhost:${process.env.PORT_SERVER ?? 3000}`);
    console.log(new ConfigService().getOrThrow('TYPE'));
    
  });  
}
bootstrap();

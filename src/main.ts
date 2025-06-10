import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false  
  }));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT_SERVER ?? 3000,() => {
    console.log(`server running on http://localhost:${process.env.PORT_SERVER ?? 3000}`);
  });  
}
bootstrap();

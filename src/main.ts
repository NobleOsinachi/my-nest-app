import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use process.env.PORT if available, or fallback to 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);

  // await app.listen(3000);
}
bootstrap();

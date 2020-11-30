import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatchAllErrorsFilter as CatchAllExceptionsFilter } from './catch-all-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new CatchAllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
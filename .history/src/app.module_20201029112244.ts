import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { CatsResolver } from './resolvers/cats/cats.resolver';
import { DogsResolver } from './resolvers/dogs/dogs.resolver';

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [AppController],
  providers: [AppService, CatsResolver, DogsResolver],
})
export class AppModule {}

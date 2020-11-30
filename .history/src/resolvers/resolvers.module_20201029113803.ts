import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogsModule } from 'src/dogs/dogs.module';
import { CatResolver } from './cat/cat.resolver';
import { DogsResolver } from './dogs/dogs.resolver';

@Module({
    // imports: [DogsModule, CatsModule],
    providers: [DogsResolver, CatResolver]
})
export class ResolversModule {}

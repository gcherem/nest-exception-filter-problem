import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogsModule } from 'src/dogs/dogs.module';
import { CatResolver } from './cat/cat.resolver';
import { DogResolver } from './dog/dog.resolver';

@Module({
    // imports: [DogsModule, CatsModule],
    providers: [DogResolver, CatResolver]
})
export class ResolverModule {}

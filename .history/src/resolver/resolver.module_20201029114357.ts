import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cat/cat.module';
import { DogsModule } from 'src/dog/dog.module';
import { CatResolver } from './cat/cat.resolver';
import { DogResolver } from './dog/dog.resolver';

@Module({
    // imports: [DogsModule, CatsModule],
    providers: [DogResolver, CatResolver]
})
export class ResolverModule {}

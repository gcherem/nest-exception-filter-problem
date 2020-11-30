import { Module } from '@nestjs/common';
import { CatModule } from 'src/cat/cat.module';
import { CatService } from 'src/cat/cat.service';
import { DogsModule } from 'src/dog/dog.module';
import { DogService } from 'src/dog/dog.service';
import { CatResolver } from './cat/cat.resolver';
import { DogResolver } from './dog/dog.resolver';

@Module({
    // imports: [DogsModule, CatsModule],
    providers: [DogResolver, CatResolver, DogService, CatService]
})
export class ResolverModule {}

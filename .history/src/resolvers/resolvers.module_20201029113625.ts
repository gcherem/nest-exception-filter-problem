import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogsModule } from 'src/dogs/dogs.module';
import { CatsResolver } from './cats/cats.resolver';
import { DogsResolver } from './dogs/dogs.resolver';

@Module({
    // imports: [DogsModule, CatsModule],
    providers: [DogsResolver, CatsResolver]
})
export class ResolversModule {}

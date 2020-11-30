import { Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { DogsModule } from 'src/dogs/dogs.module';
import { DogsResolver } from './dogs/dogs.resolver';

@Module({
    imports: [DogsModule, CatsModule]
})
export class ResolversModule {}

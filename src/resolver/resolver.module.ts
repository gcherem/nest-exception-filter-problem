import { Module } from '@nestjs/common';
import { CatService } from 'src/cat/cat.service';
import { CatResolver } from './cat/cat.resolver';

@Module({
    providers: [CatResolver, CatService]
})
export class ResolverModule {}

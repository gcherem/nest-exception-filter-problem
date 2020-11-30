import { Query, Resolver } from '@nestjs/graphql';
import { CatService } from 'src/cat/cat.service';

@Resolver('cat')
export class CatResolver {
    constructor(
        private readonly catService: CatService,
    ) {}

    @Query()
    cat() {
        return this.catService.getCat()
    }
}

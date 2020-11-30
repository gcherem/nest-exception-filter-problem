import { Query, Resolver } from '@nestjs/graphql';

@Resolver('cat')
export class CatResolver {

    @Query()
    cat() {
        return cat
    }
}

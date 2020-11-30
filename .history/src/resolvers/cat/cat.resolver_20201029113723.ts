import { Query, Resolver } from '@nestjs/graphql';

@Resolver('cat')
export class CatsResolver {

    @Query()
    cats() {
        return 'aaa'
    }
}

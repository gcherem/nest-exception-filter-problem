import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {

    @Query()
    cats() {
        return 'aaa'
    }
}

import { Injectable } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class CatService {

    getCat() {
        throw new Error('This exception is not catched by the global exception filter');
        throw new ApolloError('This exception is not catched by the global exception filter');
    }

}

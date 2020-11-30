import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';


@Catch(ApolloError)
export class CatchAllErrorsFilter implements ExceptionFilter {
  catch(exception: ApolloError, host: ArgumentsHost) {
    console.log('never gets here!!!!')
  }
}

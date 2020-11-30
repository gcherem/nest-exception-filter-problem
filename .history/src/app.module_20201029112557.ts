import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/resolvers/**/*.gql'],
    }),
  ],
})
export class AppModule {}

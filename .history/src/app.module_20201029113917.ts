import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResolversModule } from './resolvers/resolver.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/resolvers/**/*.gql'],
    }),
    ResolversModule,
  ],
})
export class AppModule {}

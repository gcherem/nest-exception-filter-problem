import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResolverModule } from './resolver/resolver.module';
import { ResolversModule } from './resolvers/resolvers.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/resolver/**/*.gql'],
    }),
    ResolverModule,
    ResolversModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResolverModule } from './resolver/resolver.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['src/resolver/**/*.gql'],
    }),
    ResolverModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ResolverModule } from './resolver/resolver.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      path: '/',
      playground: true,
      include: [ResolverModule],
      typePaths: ['src/resolver/**/*.gql'],
      context: ({ req }) => ({ req }),
    }),
    ResolverModule,
  ],
})
export class AppModule {}

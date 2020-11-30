import { Module } from '@nestjs/common';
import { DogsService } from './dog.service';

@Module({
  providers: [DogsService]
})
export class DogsModule {}

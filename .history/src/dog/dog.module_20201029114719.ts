import { Module } from '@nestjs/common';
import { DogService } from './dog.service';

@Module({
  providers: [DogService],
  export: [DogService]
})
export class DogsModule {}

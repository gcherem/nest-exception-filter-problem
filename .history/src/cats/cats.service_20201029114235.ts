import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    getCat() {
        return "Im a cat"
    }

}

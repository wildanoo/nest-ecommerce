import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  getHello(): string {
    return 'Media service!';
  }
}

import { Injectable } from '@nestjs/common';
import Photon from '@generated/photon';

@Injectable()
export class PhotonService extends Photon {
  constructor() {
    super();
  }
}

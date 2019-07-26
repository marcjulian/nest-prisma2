import { Injectable } from '@nestjs/common';
import { PhotonService } from './photon.service';
import { User } from '@generated/photon';

@Injectable()
export class UserService {
  constructor(private photonService: PhotonService) {}

  async findUserById(userId: string): Promise<User> {
    return this.photonService.users.findOne({
      where: { id: userId }
    });
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.photonService.users.findOne({
      where: { email: email }
    });
  }
}

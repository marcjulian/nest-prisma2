import { Injectable } from '@nestjs/common';
import { PhotonService } from './photon.service';
import { User } from '@generated/photon';

@Injectable()
export class UserService {
  constructor(private photonService: PhotonService) {}

  async findUserById(userId: string): Promise<User> {
    try {
      return this.photonService.users.findOne({
        where: { id: userId }
      });
    } finally {
      await this.photonService.disconnect();
    }
  }

  async findUserByEmail(email: string): Promise<User> {
    try {
      return this.photonService.users.findOne({
        where: { email: email }
      });
    } finally {
      await this.photonService.disconnect();
    }
  }
}

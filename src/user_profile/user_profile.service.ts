/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { UserProfile } from './user_profile.model';
import { UserProfileDto } from './user_profile.dto';
import { USER_PROFILE_REPOSITORY } from '../core/constants/constants';

@Injectable()
export class UsersProfileService {

    constructor(@Inject(USER_PROFILE_REPOSITORY) private readonly userProfileRepository: typeof UserProfile) { }

    async create(userProfile: UserProfileDto): Promise<UserProfile> {
        return await this.userProfileRepository.create<UserProfile>(userProfile);
    }

    async findOneByName(name: string): Promise<UserProfile> {
        console.log(name)
        return await this.userProfileRepository.findOne<UserProfile>({ where: { name } });
    }

    async findOneById(id: number): Promise<UserProfile> {
        console.log(id)
        return await this.userProfileRepository.findOne<UserProfile>({ where: { id } });
    }
    async delete(id) {
        return await this.userProfileRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedUserProfile]] = await this.userProfileRepository.update({ ...data }, { where: { id}, returning: true });

        return { numberOfAffectedRows, updatedUserProfile };
    }   
    

}
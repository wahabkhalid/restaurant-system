/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './user.dto';
import { USER_REPOSITORY } from '../core/constants/constants';

@Injectable()
export class UsersService {

    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        console.log(email)
        return await this.userRepository.findOne<User>({ where: { email } });
    }

    async findOneById(id: number): Promise<User> {
        console.log(id)
        return await this.userRepository.findOne<User>({ where: { id } });
    }
    async delete(id) {
        return await this.userRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedUser]] = await this.userRepository.update({ ...data }, { where: { id}, returning: true });

        return { numberOfAffectedRows, updatedUser };
    }   
    

}
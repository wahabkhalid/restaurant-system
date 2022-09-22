/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserProfile } from './user_profile.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports: [SequelizeModule.forFeature([UserProfile])],
    // export it to use it outside this module
    exports: [SequelizeModule]
})
export class UserProfileModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserProfile } from './user_profile.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersProfileController } from './user_profile.controller';
import { UsersProfileService } from './user_profile.service';
import { users_profileProviders } from './user_profile.provider';

@Module({
    imports: [SequelizeModule.forFeature([UserProfile])],
    // export it to use it outside this module
    controllers: [UsersProfileController],
    providers: [UsersProfileService,...users_profileProviders],
    exports: [SequelizeModule]
})
export class UserProfileModule {}

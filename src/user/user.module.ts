/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import {User} from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './user.service';
import { usersProviders } from './user.provider';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({

  //  imports: [SequelizeModule.forFeature([User])],
    // export it to use it outside this module
    controllers: [UsersController],
    providers: [UsersService,...usersProviders],
    exports: [UsersService]
})
export class UserModule {}

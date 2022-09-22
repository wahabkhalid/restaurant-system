/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import {User} from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({

    imports: [SequelizeModule.forFeature([User])],
    // export it to use it outside this module
    exports: [SequelizeModule]
})
export class UserModule {}

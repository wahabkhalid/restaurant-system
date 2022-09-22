/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {Restaurant} from './restaurant.model'

@Module({
    imports: [SequelizeModule.forFeature([Restaurant])],
    // export it to use it outside this module
    exports: [SequelizeModule]
})
export class RestaurantModule {}

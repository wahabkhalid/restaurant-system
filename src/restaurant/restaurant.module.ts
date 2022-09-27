/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {Restaurant} from './restaurant.model'
import { RestaurantsController } from './restaurant.controller';
import { RestaurantsService } from './restaurant.service';
import { restaurantProviders } from './restaurant.provider';
@Module({
    imports: [SequelizeModule.forFeature([Restaurant])],
    // export it to use it outside this module
    controllers: [RestaurantsController],
    providers: [RestaurantsService,...restaurantProviders],
    exports: [SequelizeModule]
})
export class RestaurantModule {}

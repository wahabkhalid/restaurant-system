/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller,UseGuards,Request,Post,Get, Put, Delete, Param,Body, UseInterceptors, CacheInterceptor, CacheKey } from '@nestjs/common';
import { RestaurantsService } from './restaurant.service';
//import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
import { RestaurantDto } from './restaurant.dto';
import { Restaurant } from './restaurant.model';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@UseInterceptors(CacheInterceptor)
@Controller('restaurants')
@ApiBearerAuth()
@ApiTags('restaurants')
export class RestaurantsController {
    constructor(private restaurantService: RestaurantsService) {}

    @Post('createRestaurant')
    @ApiBearerAuth('JWT-auth')
    @CacheKey('CreateRestaurant')
    async signUp(@Body() restaurant: RestaurantDto) {
        return await this.restaurantService.create(restaurant);
    }

    //@UseGuards(AuthGuard('jwt'))
    @Put(':id')
    @ApiBearerAuth('JWT-auth')
    async update(@Param('id') id: number, @Body() restaurant: RestaurantDto, @Request() req): Promise<Restaurant> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedRestaurant } = await this.restaurantService.update(id, restaurant);

        // if the number of row affected is zero, 
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Restaurant doesn\'t exist');
        }

        // return the updated post
        return updatedRestaurant;
    }

    //@UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @ApiBearerAuth('JWT-auth')
    async remove(@Param('id') id: number) {
        // delete the post with this id
        const deleted = await this.restaurantService.delete(id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This Restaurnt doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
    @Get(':id')
    @ApiBearerAuth('JWT-auth')
    async findById(@Param('id') id:number) {
        return await this.restaurantService.findOneById(id);
    }
    @Get('findRestaurant')
    @ApiBearerAuth('JWT-auth')
    @CacheKey('FindRestaurant')
    async findByName (@Body('name') name: string){
        console.log(name)
        return await this.restaurantService.findOneByName(name);
    }
}
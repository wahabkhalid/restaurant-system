/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller,UseGuards,Request,Post,Get, Put, Delete, Param,Body } from '@nestjs/common';
import { RestaurantsService } from './restaurant.service';
//import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
import { RestaurantDto } from './restaurant.dto';
import { Restaurant } from './restaurant.model';
@Controller('restaurants')
export class RestaurantsController {
    constructor(private restaurantService: RestaurantsService) {}

    @Post('createRestaurant')
    async signUp(@Body() restaurant: RestaurantDto) {
        return await this.restaurantService.create(restaurant);
    }

    //@UseGuards(AuthGuard('jwt'))
    @Put(':id')
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
    async findById(@Param('id') id:number) {
        return await this.restaurantService.findOneById(id);
    }
    @Get('findRestaurant')
    async findByName (@Body('name') name: string){
        console.log(name)
        return await this.restaurantService.findOneByName(name);
    }
}
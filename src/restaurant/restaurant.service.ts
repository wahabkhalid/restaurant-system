/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { Restaurant } from './restaurant.model';
import { RestaurantDto } from './restaurant.dto';
import { RESTAURANT_REPOSITORY } from '../core/constants/constants';

@Injectable()
export class RestaurantsService {

    constructor(@Inject(RESTAURANT_REPOSITORY) private readonly restaurantRepository: typeof Restaurant) { }

    async create(restaurant: RestaurantDto): Promise<Restaurant> {
        return await this.restaurantRepository.create<Restaurant>(restaurant);
    }

    async findOneByName(name: string): Promise<Restaurant> {
        console.log(name)
        return await this.restaurantRepository.findOne<Restaurant>({ where: { name } });
    }

    async findOneById(id: number): Promise<Restaurant> {
        console.log(id)
        return await this.restaurantRepository.findOne<Restaurant>({ where: { id } });
    }
    async delete(id) {
        return await this.restaurantRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedRestaurant]] = await this.restaurantRepository.update({ ...data }, { where: { id}, returning: true });

        return { numberOfAffectedRows, updatedRestaurant };
    }   
    

}
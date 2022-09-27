/* eslint-disable prettier/prettier */
import { Restaurant } from './restaurant.model';
import { RESTAURANT_REPOSITORY } from '../core/constants/constants';

export const restaurantProviders = [{
   provide: RESTAURANT_REPOSITORY,
   useValue: Restaurant,
}]
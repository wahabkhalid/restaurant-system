/* eslint-disable prettier/prettier */
import { Order } from 'src/order/order.model';
import{ORDER_REPOSITORY} from '../core/constants/constants';

export const orderProviders = [{
    provide: ORDER_REPOSITORY,
    useValue:Order
}]
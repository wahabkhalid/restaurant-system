/* eslint-disable prettier/prettier */
import { User } from './user.model';
import { USER_REPOSITORY } from '../core/constants/constants';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}]
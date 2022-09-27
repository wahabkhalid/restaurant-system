/* eslint-disable prettier/prettier */
import { UserProfile } from './user_profile.model';
import { USER_PROFILE_REPOSITORY } from '../core/constants/constants';

export const users_profileProviders = [{
   provide: USER_PROFILE_REPOSITORY,
   useValue: UserProfile,
}]
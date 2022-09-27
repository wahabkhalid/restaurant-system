/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Menu } from './menu.model';
import { MENU_REPOSITORY } from '../core/constants/constants';

export const menusProviders = [{
   provide: MENU_REPOSITORY,
   useValue: Menu,
}]
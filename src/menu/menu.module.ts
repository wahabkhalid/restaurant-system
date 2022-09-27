/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Menu } from './menu.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { menusProviders } from './menu.provider';
@Module({
    imports: [SequelizeModule.forFeature([Menu])],
    // export it to use it outside this module
    controllers: [MenuController],
    providers: [MenuService,...menusProviders],
    exports: [SequelizeModule]
})
export class MenuModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Menu } from './menu.model';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
    imports: [SequelizeModule.forFeature([Menu])],
    // export it to use it outside this module
    exports: [SequelizeModule]
})
export class MenuModule {}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.model';
@Module({
    imports: [SequelizeModule.forFeature([Order])],
    // export it to use it outside this module
    exports: [SequelizeModule]
})
export class OrderModule {}

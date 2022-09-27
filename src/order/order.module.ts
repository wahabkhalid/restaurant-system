/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.model';
import { OrdersService } from './order.service';
import { OrdersController } from './order.controller';
import { orderProviders } from './order.provider';
@Module({
    imports: [SequelizeModule.forFeature([Order])],
    // export it to use it outside this module

    controllers: [OrdersController],
  providers: [OrdersService,...orderProviders],
    exports: [SequelizeModule]
})
export class OrderModule {}

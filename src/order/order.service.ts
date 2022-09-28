/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable,Inject } from '@nestjs/common';
import { ORDER_REPOSITORY } from 'src/core/constants/constants';
import { CreateOrderDto } from './order.dto';
import { UpdateOrderDto } from './update.dto';
import { Order } from 'src/order/order.model';

@Injectable()
export class OrdersService {
  constructor(@Inject(ORDER_REPOSITORY) private readonly orderRepo:typeof Order){}
 async create(createOrderDto: CreateOrderDto) {
    return await this.orderRepo.create<Order>(createOrderDto)
  }
  async findAll() {
    return await this.orderRepo.findAll<Order>();
  }

  async findOne(id: any) {
    return await this.orderRepo.findOne<Order>({where:{id}})
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedUser]] = await this.orderRepo.update({ ...data }, { where: { id}, returning: true });

    return { numberOfAffectedRows, updatedUser };
}   

async remove(id:any) {
  return await this.orderRepo.destroy({ where: { id } });
}

}
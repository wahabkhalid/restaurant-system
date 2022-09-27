/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './order.dto';
import { UpdateOrderDto } from './update.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('addOrder')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  findAll() {
    return this.ordersService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.ordersService.findOne(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: any, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') id: any) {
    const deleted=await this.ordersService.remove(id);
    if (deleted === 0) {
      throw new NotFoundException('This Order doesnt exist');
  }

  // return success message
  return 'Successfully deleted';
  }
}
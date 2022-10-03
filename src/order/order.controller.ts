/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, UseInterceptors, CacheInterceptor, CacheKey } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from './order.dto';
import { UpdateOrderDto } from './update.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';


@UseInterceptors(CacheInterceptor)
@ApiBearerAuth()
@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('addOrder')
  @ApiBearerAuth('JWT-auth')
  @CacheKey('AddOrder')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('getAll')
  @ApiBearerAuth('JWT-auth')
  @CacheKey('GetAll')
  findAll() {
    return this.ordersService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiBearerAuth("JWT-auth")
  findOne(@Param('id') id: any) {
    return this.ordersService.findOne(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  update(@Param('id') id: any, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  async remove(@Param('id') id: any) {
    const deleted=await this.ordersService.remove(id);
    if (deleted === 0) {
      throw new NotFoundException('This Order doesnt exist');
  }

  // return success message
  return 'Successfully deleted';
  }
}
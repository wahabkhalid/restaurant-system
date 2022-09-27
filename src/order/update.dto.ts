/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './order.dto';
import { Menu } from 'src/menu/menu.model';
import { IsNotEmpty,IsArray} from 'class-validator';
import { Type } from 'class-transformer';
export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsNotEmpty()
    @IsArray()
    @Type(() => Menu)
    order_items:[Menu];
}
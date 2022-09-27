/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty } from "class-validator";
import { Menu } from "src/menu/menu.model";
import { Type } from "class-transformer";


export class CreateOrderDto {
    @IsNotEmpty()
    @IsArray()
    @Type(() => Menu)
    order_items:[Menu];
    @IsNotEmpty()
    total_price:number;
}
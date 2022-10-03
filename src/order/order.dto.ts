/* eslint-disable prettier/prettier */
import { IsArray, IsNotEmpty } from "class-validator";
import { Menu } from "src/menu/menu.model";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsArray()
    @Type(() => Menu)
    order_items:[Menu];
    @ApiProperty()
    @IsNotEmpty()
    total_price:number;
}
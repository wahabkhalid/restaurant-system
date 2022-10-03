/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './menu.dto';
import { ApiProperty } from "@nestjs/swagger";
enum itemType {
    APPITIZER = 'appitizer',
    PAKISTANI='pakistani',
    DRINKS='drinks',
    SWEETS='sweets',
    

}
export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    @ApiProperty()
    @IsNotEmpty()
    item:string;
    @ApiProperty()
    @IsNotEmpty()
    price:any;
    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(itemType)
    category:any;
}
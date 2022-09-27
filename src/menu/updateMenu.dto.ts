/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './menu.dto';
enum itemType {
    APPITIZER = 'appitizer',
    PAKISTANI='pakistani',
    DRINKS='drinks',
    SWEETS='sweets',
    

}
export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    @IsNotEmpty()
    item:string;
    @IsNotEmpty()
    price:any;
    @IsNotEmpty()
    @IsEnum(itemType)
    category:any;
}
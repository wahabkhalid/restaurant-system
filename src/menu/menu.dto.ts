/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from "class-validator";

enum itemType {
    APPETIZER = 'appitizer',
    PAKISTANI='pakistani',
    
    DRINKS='drinks',
    SWEETS='sweets'

}
export class CreateMenuDto {
    @IsNotEmpty()
    item:string;
    @IsNotEmpty()
    price:any;
    @IsNotEmpty()
    @IsEnum(itemType)
    category:any;
}
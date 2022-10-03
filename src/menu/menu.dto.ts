/* eslint-disable prettier/prettier */
import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";

enum itemType {
    APPETIZER = 'appitizer',
    PAKISTANI='pakistani',
    
    DRINKS='drinks',
    SWEETS='sweets'

}
export class CreateMenuDto {
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
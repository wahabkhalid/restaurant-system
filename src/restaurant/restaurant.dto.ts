/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {IsNotEmpty,IsEmail,Matches, Max, MaxLength, MinLength} from 'class-validator'
export class RestaurantDto {
    
    @IsNotEmpty()
    
     name: string;
    @IsNotEmpty()
 //   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
     address: string;

     @IsNotEmpty()
     contact:string

     @IsNotEmpty()
     user_type:any

}
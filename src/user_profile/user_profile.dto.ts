/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty,IsEmail,Matches, Max, MaxLength, MinLength} from 'class-validator'
export class UserProfileDto {
    @ApiProperty()
    @IsNotEmpty()
    
     name: string;
     @ApiProperty()
    @IsNotEmpty()
 //   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
     address: string;

     @ApiProperty()
     @IsNotEmpty()
     contact:string
      @ApiProperty()
     @IsNotEmpty()
     user_type:any

}

//name,address,contact,user_type
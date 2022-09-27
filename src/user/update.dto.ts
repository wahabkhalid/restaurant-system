/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {IsNotEmpty,IsEmail,Matches, Max, MaxLength, MinLength} from 'class-validator'

export class UpdateDto {
    @IsNotEmpty()
    @IsEmail()
     email: string;
    @IsNotEmpty()
  //  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @MinLength(8)
    @MaxLength(24)
     password: string;
     @IsNotEmpty()
     isActive:boolean;
     @IsNotEmpty()
     user_type:any
    
}
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty,IsEmail,Matches, Max, MaxLength, MinLength} from 'class-validator'

export class LoginDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
     email: string;
     @ApiProperty()
    @IsNotEmpty()
 //   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @MinLength(8)
    @MaxLength(24)
     password: string;
     

    
}
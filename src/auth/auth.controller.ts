/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../user/user.dto';
import { LoginDto } from '../user/login.dto';





@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

   @UseGuards(AuthGuard('jwt'))
    @Post('/login')
    async login(@Body() user:LoginDto) {
        return await this.authService.login(user);
    }
   @UseGuards(AuthGuard('jwt'))
    @Post('/signup')
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Body, Post, UseGuards, Request, UseInterceptors, CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../user/user.dto';
import { LoginDto } from '../user/login.dto';
import { Cache } from 'cache-manager';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';




@UseInterceptors(CacheInterceptor)
@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

   //@UseGuards(AuthGuard('jwt'))
    @Post('/login')
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Login User' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
    @CacheKey('logIn')
    async login(@Body() user:LoginDto) {
        return await this.authService.login(user);
    }
//   @UseGuards(AuthGuard('jwt'))
    @Post('/signup')
    @ApiBearerAuth('JWT-auth')
    @ApiOperation({ summary: 'Create User' })
  //@ApiResponse({ status: 403, description: 'Forbidden.' })
    // @CacheKey('signUp')
    // @CacheTTL(0)
    async signUp(@Body() user: UserDto) {
        console.log('body', user)
        return await this.authService.create(user);
    }
}
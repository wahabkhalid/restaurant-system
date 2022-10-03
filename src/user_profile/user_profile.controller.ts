/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller,UseGuards,Request,Post,Get, Put, Delete, Param,Body, UseInterceptors, CacheInterceptor, CacheKey } from '@nestjs/common';
import { UsersProfileService } from './user_profile.service';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UserProfileDto } from './user_profile.dto';
import { UserProfile } from './user_profile.model';

import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';


@UseInterceptors(CacheInterceptor)
@Controller('userprofile')
@ApiBearerAuth()
@ApiTags('user profile')
export class UsersProfileController {
    constructor(private userProfileService: UsersProfileService) {}

    @Post('/createprofile')
    @ApiBearerAuth('JWT-auth')
    @CacheKey('CreateProfile')
    async createprofile(@Body() userProfile: UserProfileDto) {
        return await this.userProfileService.create(userProfile);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    @ApiBearerAuth('JWT-auth')
    async update(@Param('id') id: number, @Body() userProfile: UserProfileDto, @Request() req): Promise<UserProfile> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedUserProfile } = await this.userProfileService.update(id,userProfile);

        // if the number of row affected is zero, 
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return the updated post
        return updatedUserProfile;
    }

    //@UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @ApiBearerAuth('JWT-auth')
    async remove(@Param('id') id: number) {
        // delete the post with this id
        const deleted = await this.userProfileService.delete(id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This User profile doesnt exist');
        }

        // return success message
        return 'Successfully deleted';
    }
    @Get(':id')
    @ApiBearerAuth('JWT-auth')
    async findById(@Param('id') id:number) {
        return await this.userProfileService.findOneById(id);
    }
    @Get('findUserProfile')
    @ApiBearerAuth('JWT-auth')
    @CacheKey('FindUserProfile')
    async findByName (@Body('name') name: string){
        console.log(name)
        return await this.userProfileService.findOneByName(name);
    }
}
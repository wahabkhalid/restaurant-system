/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller,UseGuards,Request,Post,Get, Put, Delete, Param,Body, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UserDto } from './user.dto';
import { User } from './user.model';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@UseInterceptors(CacheInterceptor)
@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

   /* @Post('signup')
    async signUp(@Body() user: UserDto) {
        return await this.userService.create(user);
    }
*/

    @UseGuards(AuthGuard('jwt'))

    @Put(':id')
    @ApiBearerAuth('JWT-auth')
    async update(@Param('id') id: number, @Body() user: UserDto): Promise<User> {
        // get the number of row affected and the updated post
        const { numberOfAffectedRows, updatedUser } = await this.userService.update(id, user);

        // if the number of row affected is zero, 
        // it means the post doesn't exist in our db
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

        // return the updated post
        return updatedUser;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @ApiBearerAuth('JWT-auth')
    async remove(@Param('id') id: number) {
        // delete the post with this id
        const deleted = await this.userService.delete(id);

        // if the number of row affected is zero, 
        // then the post doesn't exist in our db
        if (deleted === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }

        // return success message
        return 'Successfully deleted';
    }
    @Get(':id')
    @ApiBearerAuth('JWT-auth')
    async findById(@Param('id') id:number) {
        return await this.userService.findOneById(id);
    }
    @Get(':email')
    @ApiBearerAuth('JWT-auth')
    async findByEmail (@Param('email') email: any){
        console.log(email)
        return await this.userService.findOneByEmail(email);
    }
}
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, UseInterceptors, CacheInterceptor, CacheKey } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './menu.dto';
import { UpdateMenuDto } from './updateMenu.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ApiBearerAuth, ApiTags,ApiOperation,ApiResponse } from '@nestjs/swagger';
@UseInterceptors(CacheInterceptor)
@Controller('menu')
@ApiBearerAuth()
@ApiTags('Menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(AuthGuard('jwt')) 
  @Post('addMenu')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'add menu' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @CacheKey('AddMenu')
  
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }
  @UseGuards(AuthGuard('jwt')) 
  @Get('getAll')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'get all the menus' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @CacheKey('GetAll')
  findAll() {
    return this.menuService.findAll();
  }
  @UseGuards(AuthGuard('jwt')) 
  @Get(':id')
  @ApiBearerAuth("JWT-auth")
  @ApiOperation({ summary: 'get one menu by ID' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(id);
  }
  @UseGuards(AuthGuard('jwt')) 
  @Patch(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'update menu by id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }
  @UseGuards(AuthGuard('jwt')) 
  @Delete(':id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'delete menu by id' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
 async remove(@Param('id') id:any) {
    const deleted=await this.menuService.remove(id);
    if (deleted === 0) {
      throw new NotFoundException('Menu Item doesn\'t exist');
  }

  // return success message
  return 'Successfully deleted';
  }
}
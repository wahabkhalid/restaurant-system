/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './menu.dto';
import { UpdateMenuDto } from './updateMenu.dto';
import { AuthGuard } from '@nestjs/passport';
import { NotFoundException } from '@nestjs/common/exceptions';
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(AuthGuard('jwt')) 
  @Post('addMenu')
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }
  @UseGuards(AuthGuard('jwt')) 
  @Get('getAll')
  findAll() {
    return this.menuService.findAll();
  }
  @UseGuards(AuthGuard('jwt')) 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }
  @UseGuards(AuthGuard('jwt')) 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }
  @UseGuards(AuthGuard('jwt')) 
  @Delete(':id')
 async remove(@Param('id') id:any) {
    const deleted=await this.menuService.remove(id);
    if (deleted === 0) {
      throw new NotFoundException('Menu Item doesn\'t exist');
  }

  // return success message
  return 'Successfully deleted';
  }
}
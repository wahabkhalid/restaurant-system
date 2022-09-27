/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable,Inject } from '@nestjs/common';
import { MENU_REPOSITORY } from 'src/core/constants/constants';
import { Menu } from './menu.model';
import { CreateMenuDto } from './menu.dto';
import { UpdateMenuDto } from './updateMenu.dto';

@Injectable()
export class MenuService {
  constructor(@Inject(MENU_REPOSITORY) private readonly menuRepo:typeof Menu){}
 async create(createMenuDto: CreateMenuDto) {
    return await this.menuRepo.create<Menu>(createMenuDto)
  }

 
  async findAll() {
    return await this.menuRepo.findAll<Menu>();
  }

  async findOne(id: any) {
    return await this.menuRepo.findOne<Menu>(id)
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedUser]] = await this.menuRepo.update({ ...data }, { where: { id}, returning: true });

    return { numberOfAffectedRows, updatedUser };
}   

async remove(id:any) {
  return await this.menuRepo.destroy({ where: { id } });
}
}
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';
import { DataType, DataTypes, EnumDataType, Sequelize } from 'sequelize/types';


@Table
export class Menu extends Model<Menu> {
  @Column
  item: string;

  @Column
  price: string;

  //@Column
  category:EnumDataType<any>;
  
}
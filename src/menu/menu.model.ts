/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table,  } from 'sequelize-typescript';
import { DataTypes, EnumDataType, Sequelize } from 'sequelize/types';


@Table({tableName: 'Menus'})
export class Menu extends Model<Menu> {
  @Column(DataType.STRING)
  item: string;

  @Column(DataType.INTEGER)
  price: number;

 @Column(DataType.ENUM("appitizer","pakistani","drinks","sweets"))
  category: EnumDataType<string>
  
}
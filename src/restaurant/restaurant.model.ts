/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';
import { EnumDataType } from 'sequelize/types';

@Table
export class Restaurant extends Model<Restaurant> {
  @Column

  userId: string;

  @Column
  name:string

  @Column
  address: string;

  @Column
  contact:string;

 // @Column
  user_type:EnumDataType<any>

  
}
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ArrayDataType, DataTypes, IntegerDataType, Sequelize } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';
import { Menu } from '../menu/menu.model';



@Table
export class Order extends Model<Order>  {
  //@Column
  orderItems:ArrayDataType<any> ;

  //@Column
  totalPrice:IntegerDataType;

}
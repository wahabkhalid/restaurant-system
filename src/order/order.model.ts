/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ArrayDataType, DataTypes, IntegerDataType, Sequelize } from 'sequelize';
import { Column, Model, Table ,DataType} from 'sequelize-typescript';
import { Menu } from '../menu/menu.model';



@Table
export class Order extends Model<Order>  {
  @Column(DataType.ARRAY(DataType.STRING))
  orderItems:ArrayDataType<any> ;

  @Column(DataType.INTEGER)
  totalPrice:IntegerDataType;

}
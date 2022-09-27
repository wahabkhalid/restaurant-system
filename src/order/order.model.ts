/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ArrayDataType, DataTypes, IntegerDataType, Sequelize } from 'sequelize';
import { Column, Model, Table ,DataType} from 'sequelize-typescript';
//import { Menu } from '../menu/menu.model';
//import { Optional } from 'sequelize';



@Table
export class Order extends Model<Order>  {
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      })
      id:any;
  
    @Column(DataType.ARRAY(DataType.STRING))
  orderItems:ArrayDataType<any> ;

  @Column(DataType.INTEGER)
  totalPrice:IntegerDataType;

}
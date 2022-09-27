/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { EnumDataType } from 'sequelize';
import { DataTypes,Optional } from 'sequelize'; 

@Table
export class UserProfile extends Model<UserProfile> {
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      })
      id:any;
  
    @Column(DataType.UUID)

  userId: any;

  @Column(DataType.STRING)   //name,address,contact,user_type
  name:string

  @Column(DataType.STRING)
  address: string;

  @Column(DataType.STRING)
  contact:string;

  @Column(DataType.ENUM("owner","employee"))
  user_type:EnumDataType<any>

  
}
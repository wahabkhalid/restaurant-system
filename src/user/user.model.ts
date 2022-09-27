/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column,DataType, Model, Table } from 'sequelize-typescript';
import { DataTypes, EnumDataType ,Optional} from 'sequelize';
//import {v1 as uuid} from "uuid"; 


@Table
export class User extends Model<User> {
    @Column({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      })
      id:any;
  @Column(DataType.STRING)

  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.ENUM("owner","employee"))
  user_type:EnumDataType<any>;

  @Column(DataType.BOOLEAN)
  isActive: boolean;
}

//
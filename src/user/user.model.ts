/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column,DataType, Model, Table } from 'sequelize-typescript';
import { DataTypes, EnumDataType } from 'sequelize/types';

@Table
export class User extends Model<User> {
  @Column(DataType.STRING)

  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.ENUM("owner","employee"))
  user_type:EnumDataType<any>;

  @Column(DataType.BOOLEAN)
  isActive: boolean;
}
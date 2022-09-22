/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes, EnumDataType } from 'sequelize/types';

@Table
export class User extends Model<User> {
  @Column

  email: string;

  @Column
  password: string;

  //@Column
  user_type:EnumDataType<any>;

  @Column({ defaultValue: true })
  isActive: boolean;
}
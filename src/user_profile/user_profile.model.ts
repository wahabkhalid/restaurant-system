/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';
import { EnumDataType } from 'sequelize/types';

@Table
export class UserProfile extends Model<UserProfile> {
  @Column

  userId: string;

  @Column
  name:string

  @Column
  address: string;

  @Column
  contact:string;

  //@Column
  user_type:EnumDataType<any>

  
}
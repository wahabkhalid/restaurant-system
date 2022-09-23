/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ParseUUIDPipe } from '@nestjs/common';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { EnumDataType } from 'sequelize/types';

@Table
export class Restaurant extends Model<Restaurant> {
  @Column(DataType.UUID)
  userId: any;

  @Column(DataType.STRING)
  name:string

  @Column(DataType.STRING)
  address: string;

  @Column(DataType.STRING)
  contact:string;

  @Column(DataType.ENUM("owner","employee"))
  user_type:EnumDataType<any>

  
}
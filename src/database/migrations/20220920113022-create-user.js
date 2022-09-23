/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
   up: async (queryInterface, Sequelize)=> {
    
    return queryInterface.createTable('Users',{
      id:{
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
      
      
        primaryKey: true,
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,

      },
      user_type:{
        type:Sequelize.ENUM("owner","employee"),
        allowNull:false,

      },
      isActive:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

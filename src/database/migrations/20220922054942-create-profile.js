/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
   up: async (queryInterface, Sequelize)=> {
    
    return queryInterface.createTable('UserProfiles',{
      id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue:DataTypes.UUIDV4
      
    
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
        
      },
      address:{
        type:Sequelize.STRING,
        allowNull:false,
        

      },
      contact:{
        type:Sequelize.STRING,
        allowNull:false,

      },
      userId:{
        type:DataTypes.UUID,
        references:{
            model: {
                tableName:'Users'
        },
            key:'id'
        }
      },
      user_type:{
        type:Sequelize.ENUM('owner',"employee"),
        allowNull:false
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
    // hi helllo 
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserProfiles');
  }
};